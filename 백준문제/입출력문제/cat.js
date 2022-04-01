//🍕백준문제10171번 고양이 만들기
/*Key Point 
✅역슬래쉬 표현: \\ 두개 입력해야 정상입력
✅ 줄바꿈: \n 을 통해 표현 

✅ ref: https://stackoverflow.com/questions/3903488/javascript-backslash-in-variables-is-causing-an-error
✅ escape character in JS(개념): https://www.tutorialspoint.com/escape-characters-in-javascript

✅해당내용에 관한 자세한 설명 

"The backslash (\) is an escape character in Javascript (along with a lot of other C-like languages). 
This means that when Javascript encounters a backslash, it tries to escape the following character. For instance,
 \n is a newline character (rather than a backslash followed by the letter n).
In order to output a literal backslash, you need to escape it.
That means \\ will output a single backslash (and \\\\ will output two, and so on). 
The reason "aa ///\" doesn't work is because the backslash escapes the " (which will print a literal quote),
and thus your string is not properly terminated. 
Similarly, "aa ///\\\" won't work, because the last backslash again escapes the quote.
Just remember, for each backslash you want to output, you need to give Javascript two."
*/

console.log("\\    /\\");
console.log(" )  ( ')");
console.log("(  /  )");
console.log(" \\(__)|");
