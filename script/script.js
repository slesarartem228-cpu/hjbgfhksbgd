const story = [
    {
        background: "https://yandex.ru/images/search?pos=3&from=tabbar&img_url=https%3A%2F%2Fwww.slamdunk.ru%2Fuploads%2Fmonthly_2019_05%2Ffile-20170629-16091-1wjxdp5.jpg.9f179bfe5531455a5da700e2b5e69c29.jpg&text=задний+фон+помойка&rpt=simage&lr=62",
        character: "https://yandex.ru/images/search?text=%2Cjv%3B+rfhnbyrf&pos=2&rpt=simage&img_url=http%3A%2F%2Fi.pinimg.com%2F736x%2F20%2Fa6%2F31%2F20a6316c2992912f6fc636e38f3f3335.jpg&from=tabbar&lr=62",
        speaker: "bomj",
        text: "мусорная помойка с бомжом",

        choices: [
            {
                text: "слыш ты атдай мне все денешки",
                next: 1
            },
            {
                text: "го дратся за денешки или струсил",
                next: 2
            }
        ]
    }
]

let currentScene = 0;

const sceneElement = document.querySelector('#scene');
const characterElement = document.querySelector('#character');
const speakerElement = document.querySelector('#speaker');
const textElement = document.querySelector('#text');
const choicesElement = document.querySelector('#choices');

function showScene() {
    const scene = story[currentScene]

    if(scene.background) {
        sceneElement.style.backgroundImage = `url("${scene.background}")`;
    }
    if(scene.character) {
        characterElement.src = scene.character;
        characterElement.style.display = "block";
    }
    else {
        characterElement.style.display = "none";
    }

    speakerElement.textContent = scene.speaker;
    textElement.textContent = scene.text;

    choicesElement.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");

        button.textContent = choice.text;

        button.addEventListener("click", () => {
            currentScene = choice.text;
            showScene();
        })
        choicesElement.appendChild(button);
    })

}
showScene();