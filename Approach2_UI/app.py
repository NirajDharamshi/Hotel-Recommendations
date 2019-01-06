from flask import Flask, render_template, json, request, redirect, url_for
import os
import pandas as pd
from pandas import DataFrame,Series
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn import linear_model
from sklearn.linear_model import Ridge

app = Flask(__name__)

df = pd.read_csv('C:\\Users\\Niraj\\Desktop\\Hotel_Reviews.csv')




@app.route('/home', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def demo_256():
    if request.method == 'GET':
        return render_template('demo_256.html')
    else:
        location = request.form['location']
        p = df[df['Hotel_Address'].str.contains(location)]
        grouped = p.groupby('Hotel_Name')
        k = list(grouped.groups.keys())
        p.drop(['Hotel_Address', 'Review_Date', 'Reviewer_Nationality', 'Negative_Review', 'Positive_Review', 'Tags',
                'days_since_review', 'lat', 'lng'], axis=1, inplace=True)

        rating = {}
        for i in range(len(k)):
            df_h = p.loc[p['Hotel_Name'] == k[i]]

            X_test = df_h.iloc[0:1, :]
            X_train = df_h.iloc[1:, :]
            y = X_train['Reviewer_Score']
            X_train.drop(['Hotel_Name', 'Reviewer_Score'], axis=1, inplace=True)
            X_test.drop(['Hotel_Name', 'Reviewer_Score'], axis=1, inplace=True)
            X_Train = X_train.values
            X_Train = np.asarray(X_Train)
            X_Test = X_test.values
            X_Test = np.asarray(X_test)
            X_std = StandardScaler().fit_transform(X_Train)
            X_std_test = StandardScaler().fit_transform(X_Test)
            n_neighbors = 5
            clf = Ridge(alpha=1.0)
            clf.fit(X_std, y)
            y1_knn = clf.predict(X_std_test)
            rating[k[i]] = (y1_knn)

        recomm = sorted(rating, key=rating.get, reverse=True)

        return render_template('output.html', recomm=recomm[0:5])


if __name__ == "__main__":
    app.run()
