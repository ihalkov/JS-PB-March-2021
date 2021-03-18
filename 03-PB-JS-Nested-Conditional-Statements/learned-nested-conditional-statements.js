const lang = 'JavaScript';

// instead of this
if (lang == 'Python' || lang == 'Scala' || lang == 'Java') {
    // code goes here...
}

// write this
if (['Python', 'Scala', 'Java'].includes(lang)) {
    // code goes here...
}