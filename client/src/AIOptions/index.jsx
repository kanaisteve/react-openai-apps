export const arrayItems = [
    {
        name: "Q&A",
        id: "q&a",
        description: "Answer questions based on existings knowledge",
        options: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: "Grammer Correction",
        id: "grammerCorrection",
        description: "Corrects sentences into standard English.",
    },
    {
        name: "Summarize for a 2nd grader",
        id: "summary",
        description: "Translates difficult text into simpler concepts.",
    },
    {
        name: "English to other language",
        id: "translate",
        description: "Translates English text into French, Spanish and "
    },
    {
        name: "Movie to Emoji",
        id: "movieToEmoji",
        description: "Convert movie titles into emoji.",
    },
    {
        name: "Explain Code",
        id: "explainCode",
        description: "Explain a complicated piece of code.",
    },
    {
        name: "JavaScript helper chatbox",
        id: "jsHelperChatbox",
        description: "Message-style bot that answers JavaScript questions"
    },
    {
        name: "JavaScript to Python",
        id: "jstopy",
        description: "Convert simple JavaScript expressions to Python"
    },
    {
        name: "ML/AI Language Model Tutor",
        id: "mlAiTutor",
        description: "Bot that answers questions about language models"
    },
    {
        name: "Python Bug Fixer",
        id: "pyBugFixer",
        description: "Find and fix bugs in source code."
    },
    {
        name: "Product Name Generator",
        id: "prodNameGenerator",
        description: "Create product names from examples, words. Influenced by a community prompt"
    },
    {
        name: "Ad from product description",
        id: "prodDesToCopy",
        description: "Turn a product description into ad copy."
    },
    {
        name: "Keywords",
        id: "keyWords",
        description: "Extract keywords from a block of text."
    },
]