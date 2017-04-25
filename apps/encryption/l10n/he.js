OC.L10N.register(
    "encryption",
    {
    "Missing recovery key password" : "חסרה סיסמת מפתח שחזור",
    "Please repeat the recovery key password" : "יש לחזור על סיסמת מפתח השחזור",
    "Repeated recovery key password does not match the provided recovery key password" : "סיסמת מפתח השחזור החוזרת אינה מתאימה לסיסמת מפתח השחזור הקיימת",
    "Recovery key successfully enabled" : "מפתח השחזור אופשר בהצלחה",
    "Could not enable recovery key. Please check your recovery key password!" : "איפשור מפתח השחזור נכשל. יש לבדוק את סיסמת מפתח השחזור שלך!",
    "Recovery key successfully disabled" : "מפתח השחזור נוטרל בהצלחה",
    "Could not disable recovery key. Please check your recovery key password!" : "נטרול מפתח השחזור נכשל. יש לבדוק את סיסמת מפתח השחזור שלך!",
    "Missing parameters" : "פרמטרים חסרים",
    "Please provide the old recovery password" : "יש לספק את סיסמת השחזור הישנה",
    "Please provide a new recovery password" : "יש לספק את סיסמת השחזור החדשה",
    "Please repeat the new recovery password" : "יש לספק את סיסמת השחזור החדשה",
    "Password successfully changed." : "הסיסמא שונתה בהצלחה.",
    "Could not change the password. Maybe the old password was not correct." : "שינוי הסיסמא נכשל. יתכן שהסיסמא הישנה לא נכונה.",
    "Recovery Key disabled" : "מפתח שחזור מנוטרל",
    "Recovery Key enabled" : "מפתח שחזור מאופשר",
    "Could not enable the recovery key, please try again or contact your administrator" : "איפשור מפתח השחזור נכשל. יש לנסות שנית או לפנות למנהל שלך",
    "Could not update the private key password." : "לא ניתן לעדכן את סיסמת המפתח האישי",
    "The old password was not correct, please try again." : "הסיסמא הישנה לא נכונה, יש לנסות שנית.",
    "The current log-in password was not correct, please try again." : "סיסמת ההתחברות הנוכחית אינה נכונה, יש לנסות שנית.",
    "Private key password successfully updated." : "סיסמת מפתח אישי עודכנה בהצלחה.",
    "You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please run 'occ encryption:migrate' or contact your administrator" : "יש צורך להמיר את מפתחות ההצפנה מהצופן הישן (ownCloud <= 8.0) לצופן החדש. יש להריץ 'occ encryption:migrate' או לפנות למנהל שלך",
    "Bad Signature" : "חתימה שגויה",
    "Missing Signature" : "חתימה חסרה",
    "one-time password for server-side-encryption" : "סיסמא חד פעמית עבור הצפנת צד השרת",
    "Can not decrypt this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "לא ניתן להסיר את ההצפנה לקובץ זה, ייתכן ומדובר בקובץ משותף. יש לבקש מהבעלים של הקובץ לשתף מחדש את הקובץ אתך.",
    "Can not read this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "לא ניתן לקרוא קובץ זה, ייתכן ומדובר בקובץ משותף. יש לבקש מהבעלים של הקובץ לשתף מחדש את הקובץ אתך.",
    "Hey there,\n\nthe admin enabled server-side-encryption. Your files were encrypted using the password '%s'.\n\nPlease login to the web interface, go to the section 'basic encryption module' of your personal settings and update your encryption password by entering this password into the 'old log-in password' field and your current login-password.\n\n" : "שלום,\n\nהמנהל אפשר את ההצפנה בצד השרת. הקבצים שלך הוצפנו על בסיס הסיסמא '%s'.\n\nיש להתחבר לממשק האינטרנט, ולגשת אל 'מודול הצפנה בסיסי של' בהגדרות הבסיסיות ולעדכן את סיסמת ההצפנה שלך על ידי הכנסת הסיסמא אל שדה 'סיסמת ההתחברות הישנה' ואת סיסמת ההתחברות הנוכחית.\n\n",
    "The share will expire on %s." : "השיתוף יפוג תוקף ב- %s.",
    "Cheers!" : "לחיים!",
    "Hey there,<br><br>the admin enabled server-side-encryption. Your files were encrypted using the password <strong>%s</strong>.<br><br>Please login to the web interface, go to the section \"basic encryption module\" of your personal settings and update your encryption password by entering this password into the \"old log-in password\" field and your current login-password.<br><br>" : "שלום,<br><br>המנהל אפשר את ההצפנה בצד השרת. הקבצים שלך הוצפנו על בסיס הסיסמא <strong>%s</strong>.<br><br>יש להתחבר לממשק האינטרנט, ולגשת אל \"מודול הצפנה בסיסי של\" בהגדרות הבסיסיות ולעדכן את סיסמת ההצפנה שלך על ידי הכנסת הסיסמא אל שדה \"סיסמת ההתחברות הישנה\" ואת סיסמת ההתחברות הנוכחית.<br><br>",
    "Encrypt the home storage" : "הצפנת אחסון הבית",
    "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted" : "הפעלת אפשרות זו מצפינה את כל הקבצים המאוחסנים באחסון המרכזי, אחרת רק הקבצים המאוחסנים בהתקנים חיצוניים יוצפנו",
    "Enable recovery key" : "מאפשר מפתח שחזור",
    "Disable recovery key" : "מנטרל מפתח שחזור",
    "The recovery key is an extra encryption key that is used to encrypt files. It allows recovery of a user's files if the user forgets his or her password." : "מפתח השחזור הנו מפתח הצפנה נוסף לשימוש לצורך הצפנת הקבצים. הוא מאפשר את שחזור קבצי המשתמש אם המשתמש שוכח את הסיסמא שלו.",
    "Recovery key password" : "סיסמת מפתח השחזור",
    "Repeat recovery key password" : "יש לחזור על סיסמת מפתח השחזור",
    "Change recovery key password:" : "החלפת סיסמת מפתח השחזור:",
    "Old recovery key password" : "סיסמת מפתח שחזור ישנה",
    "New recovery key password" : "סיסמת מפתח שחזור חדשה",
    "Repeat new recovery key password" : "יש לחזור על סיסמת מפתח השחזור החדשה",
    "Change Password" : "שינוי סיסמא",
    "Your private key password no longer matches your log-in password." : "סיסמת המפתח האישי שלך כבר אינה מתאימה לסיסמת ההתחברות שלך.",
    "Set your old private key password to your current log-in password:" : "יש להחליף את סיסמת המפתח האישי הישנה בסיסמת ההתחברות הנוכחית:",
    " If you don't remember your old password you can ask your administrator to recover your files." : "אם הסיסמא הישנה נשכחה ניתן לפנות למנהל על מנת שישחזר את הקבצים שלך.",
    "Old log-in password" : "סיסמת התחברות ישנה",
    "Current log-in password" : "סיסמת התחברות נוכחית",
    "Update Private Key Password" : "עדכון סיסמת המפתח האישי",
    "Enable password recovery:" : "מאפשר שחזור סיסמא:",
    "Enabling this option will allow you to reobtain access to your encrypted files in case of password loss" : "הפעלת אפשרות זו תאפשר לך לקבל מחדש גישה לקבצים המוצפנים שלך במקרה שסיסמא נשכחת",
    "Enabled" : "מופעל",
    "Disabled" : "מנוטרל",
    "Encryption App is enabled but your keys are not initialized, please log-out and log-in again" : "יישום הצפנה מאופשר אבל המפתחות שלך לא אותחלו, יש להתנתק ולהתחבר מחדש"
},
"nplurals=2; plural=(n != 1);");
