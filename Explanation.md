# Explanation

這個腳本主要是透過Google Form提供的prefill功能實現的，即在表單網址後加上?entry.xxxxxxx=xxxxxx來完成自動填入。

見下圖，entry.後的數字與網頁原始碼的關係即為此。

![Picture](https://github.com/zen8841/AutoCompleteGoogleForm/blob/main/Picture/Explan.png)



若要取得entry.後的數字，可以從FB_PUBLIC_LOAD_DATA_這個網頁中已定義的陣列中取得，見下三圖

![Picture](https://github.com/zen8841/AutoCompleteGoogleForm/blob/main/Picture/1.png)

![Picture](https://github.com/zen8841/AutoCompleteGoogleForm/blob/main/Picture/2.png)

![Picture](https://github.com/zen8841/AutoCompleteGoogleForm/blob/main/Picture/3.png)

我們可以發現所有我們要的東西都存在FB_PUBLIC_LOAD_DATA_這個陣列裡，稍微看一下即可找到值位於陣列的何處。



這個腳本會先檢查第一個問題是否為班級，如果是才會執行腳本，最後就是透過從FB_PUBLIC_LOAD_DATA_中得到的值去更改網址，並在最後加上&?xxx作為識別已經填完的表單，避免因為檢查到https://docs.google.com/forms/* 而一直重複運行(@exclude      https://docs.google.com/forms/*&?123)

