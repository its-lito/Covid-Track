function checkDate() {
    let date = getelementbyid(datetime);
    
    let days = date.setDate(date.getDate() - date);

    if ( days >= 14 ){
        setFormMessage(loginForm, "error", "You have already added a covid case the past 14 days");
    }
}

//Πρέπει να δει στην sql αν υπάρχουν προηγούμενα δεδομένα και να τα αφαιρέσει από
// την τρέχουσα ημερομηνία