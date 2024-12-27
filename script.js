const tips = {
    boys: [
        "Take a deep breath and count to ten.",
        "Engage in physical activities like jogging or playing sports.",
        "Listen to calming music.",
        "Take short breaks during study or work.",
        "Talk to a friend or family member."
    ],
    girls: [
        "Practice mindfulness or meditation.",
        "Write down your thoughts in a journal.",
        "Enjoy a hobby like painting or reading.",
        "Treat yourself to a relaxing bath.",
        "Do yoga or light stretching."
    ]
};

function showTips(category) {
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = ""; // Clear previous tips

    tips[category].forEach((tip) => {
        const listItem = document.createElement('li');
        listItem.textContent = tip;
        tipsList.appendChild(listItem);
    });
}
