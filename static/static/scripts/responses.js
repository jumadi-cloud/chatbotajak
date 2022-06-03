function getBotResponse(input) {
    //rock paper scissors
    if (input == "boleh bertanya") {
        return "silakan";
    } else if (input == "bagaimana kabarmu?") {
        return "baik-baik saja";
    } else if (input == "siapa namamu?") {
        return "chatbot jumatec";
    } else if (input == "apa itu k3"){
        return "k3 adalah kesehatan dan keselamatan kerja"
    }
    else if (input == "apa kabar?"){
        return "baik-baik saja"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}