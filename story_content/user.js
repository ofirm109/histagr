function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UydttFU0YT":
        Script1();
        break;
      case "61w4x0XlZIQ":
        Script2();
        break;
  }
}

function Script1()
{
  // החלף את ה-URL הזה עם ה-URL של ה-Web App שלך
const url = "https://script.google.com/macros/s/AKfycbzeDkcHK6RiwsxNu0brSUxrIAj95Tw_vp37QIvyeUaxsApbzVi0DgBZKItVF-W2c3gd/exec";

// פונקציה לשליחת הנתונים
function sendUserData() {
  // קבלת אובייקט ה-player מ-Storyline
  const player = GetPlayer();
  
  // קבלת הערכים מהמשתנים ב-Storyline
  let fullname = player.GetVar("fullname");
  let email = player.GetVar("email");
  let callnum = player.GetVar("callnum");
  let egenum = player.GetVar("egenum");



  // יצירת אובייקט עם הנתונים לשליחה
  const data = {
    fullname: fullname,
    email: email,
    callnum: callnum,
    egenum: egenum
  };

  // שליחת הנתונים לשרת
  fetch(url, {
    method: 'POST',
    mode: 'no-cors', // אין אפשרות לקרוא את התגובה, אבל מאפשר שליחה ללא בעיות CORS
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  })
  .then(() => {
    console.log('Data sent successfully');
    // אפשר לעדכן משתנה ב-Storyline להצגת הודעת הצלחה
    player.SetVar("submitStatus", "Success");
  })
  .catch((error) => {
    console.error('Error:', error);
    // אפשר לעדכן משתנה ב-Storyline להצגת הודעת שגיאה
    player.SetVar("submitStatus", "Error");
  });
}

// קריאה לפונקציה
sendUserData();
}

function Script2()
{
  // החלף את ה-URL הזה עם ה-URL של ה-Web App שלך
const url = "https://script.google.com/macros/s/AKfycbzeDkcHK6RiwsxNu0brSUxrIAj95Tw_vp37QIvyeUaxsApbzVi0DgBZKItVF-W2c3gd/exec";

// פונקציה לשליחת הנתונים
function sendUserData() {
  // קבלת אובייקט ה-player מ-Storyline
  const player = GetPlayer();
  
  // קבלת הערכים מהמשתנים ב-Storyline
  let fullname = player.GetVar("fullname");
  let email = player.GetVar("email");
  let callnum = player.GetVar("callnum");
  let egenum = player.GetVar("egenum");
  let isuk = player.GetVar("isuk");
  
  



  // יצירת אובייקט עם הנתונים לשליחה
  const data = {
    fullname: fullname,
    email: email,
    callnum: callnum,
    egenum: egenum,
    isuk: isuk
  };

  // שליחת הנתונים לשרת
  fetch(url, {
    method: 'POST',
    mode: 'no-cors', // אין אפשרות לקרוא את התגובה, אבל מאפשר שליחה ללא בעיות CORS
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  })
  .then(() => {
    console.log('Data sent successfully');
    // אפשר לעדכן משתנה ב-Storyline להצגת הודעת הצלחה
    player.SetVar("submitStatus", "Success");

  })
  .catch((error) => {
    console.error('Error:', error);
    // אפשר לעדכן משתנה ב-Storyline להצגת הודעת שגיאה
    player.SetVar("submitStatus", "Error");

  });
}

// קריאה לפונקציה
sendUserData();



}

