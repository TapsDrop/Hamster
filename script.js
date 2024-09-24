document.addEventListener('DOMContentLoaded', () => {
    const games = {
        "Riding Extreme 3D": { appToken: "d28721be-fd2d-4b45-869e-9f253b554e50", promoId: "43e35910-c168-4634-ad4f-52fd764a843f" },
        "Chain Cube 2048": { appToken: "d1690a07-3780-4068-810f-9b5bbf2931b2", promoId: "b4170868-cef0-424f-8eb9-be0622e8e8e3" },
        "My Clone Army": { appToken: "74ee0b5b-775e-4bee-974f-63e7f4d5bacb", promoId: "fe693b26-b342-4159-8808-15e3ff7f8767" },
        "Train Miner": { appToken: "82647f43-3f87-402d-88dd-09a90025313f", promoId: "c4480ac7-e178-4973-8061-9ed5b2e17954" },
        "Merge Away": { appToken: "8d1cc2ad-e097-4b86-90ef-7a27e19fb833", promoId: "dc128d28-c45b-411c-98ff-ac7726fbaea4" },
        "Twerk Race 3D": { appToken: "61308365-9d16-4040-8bb0-2f4a4c69074c", promoId: "61308365-9d16-4040-8bb0-2f4a4c69074c" },
        "Polysphere": { appToken: "2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71", promoId: "2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71" },
        "Mow and Trim": { appToken: "ef319a80-949a-492e-8ee0-424fb5fc20a6", promoId: "ef319a80-949a-492e-8ee0-424fb5fc20a6" },
        "Mud Racing": { appToken: "8814a785-97fb-4177-9193-ca4180ff9da8", promoId: "8814a785-97fb-4177-9193-ca4180ff9da8" },
        "Tile Trio": { appToken: "e68b39d2-4880-4a31-b3aa-0393e7df10c7", promoId: "e68b39d2-4880-4a31-b3aa-0393e7df10c7" },
        "Zoopolis": { appToken: "b2436c89-e0aa-4aed-8046-9b0515e1c46b", promoId: "b2436c89-e0aa-4aed-8046-9b0515e1c46b" },
        "Fluff Crusade": { appToken: "112887b0-a8af-4eb2-ac63-d82df78283d9", promoId: "112887b0-a8af-4eb2-ac63-d82df78283d9" },
        "Stone Age": { appToken: "04ebd6de-69b7-43d1-9c4b-04a6ca3305af", promoId: "04ebd6de-69b7-43d1-9c4b-04a6ca3305af" },
        "Bouncemasters": { appToken: "bc72d3b9-8e91-4884-9c33-f72482f0db37", promoId: "bc72d3b9-8e91-4884-9c33-f72482f0db37" },
        "Hide Ball": { appToken: "4bf4966c-4d22-439b-8ff2-dc5ebca1a600", promoId: "4bf4966c-4d22-439b-8ff2-dc5ebca1a600" },
        "Pin Out Master": { appToken: "d2378baf-d617-417a-9d99-d685824335f0", promoId: "d2378baf-d617-417a-9d99-d685824335f0" },
        "Count Masters": { appToken: "4bdc17da-2601-449b-948e-f8c7bd376553", promoId: "4bdc17da-2601-449b-948e-f8c7bd376553" },
        "Infected Frontier": { appToken: "eb518c4b-e448-4065-9d33-06f3039f0fcb", promoId: "eb518c4b-e448-4065-9d33-06f3039f0fcb" },
        "Among Water": { appToken: "daab8f83-8ea2-4ad0-8dd5-d33363129640", promoId: "daab8f83-8ea2-4ad0-8dd5-d33363129640" },
        "Factory World": { appToken: "d02fc404-8985-4305-87d8-32bd4e66bb16", promoId: "d02fc404-8985-4305-87d8-32bd4e66bb16" },
    };

    const searchBox = document.getElementById('search-game');
    const gameList = document.getElementById('game-list');
    const gameTitle = document.getElementById('game-title');
    const codeInput = document.querySelector('.code');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const generateBtn = document.getElementById('generate-btn');

    // Populate the game list
    Object.keys(games).forEach(game => {
        const anchor = document.createElement('a');
        anchor.href = '#';
        anchor.innerText = game;
        anchor.dataset.game = game;
        anchor.onclick = function () {
            selectGame(game);
            return false; // Prevent default anchor behavior
        };
        gameList.appendChild(anchor);
    });

    // Filter games based on search
    searchBox.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const gameItems = gameList.getElementsByTagName('a');
        Array.from(gameItems).forEach(item => {
            const gameName = item.dataset.game.toLowerCase();
            item.style.display = gameName.includes(searchTerm) ? '' : 'none';
        });
    });

    // Select game function
    function selectGame(game) {
        gameTitle.innerText = game;
        codeInput.value = ''; // Clear previous code
        progressBar.style.display = 'none'; // Hide progress bar
        progressText.style.display = 'none'; // Hide progress text
        generateBtn.disabled = false; // Enable generate button
    }

    // Generate code function
    generateBtn.addEventListener('click', () => {
        const selectedGame = gameTitle.innerText;
        if (selectedGame in games) {
            const appToken = games[selectedGame].appToken;
            const promoId = games[selectedGame].promoId;

            // Reset progress
            progressBar.value = 0;
            progressBar.style.display = 'block'; // Show progress bar
            progressText.style.display = 'block'; // Show progress text
            progressText.innerText = 'Generating... 0%';

            let progress = 0;

            // Simulate generating code with an interval
            const interval = setInterval(() => {
                progress += 10; // Increase progress
                if (progress <= 100) {
                    progressBar.value = progress;
                    progressText.innerText = `Generating... ${progress}%`;
                }
                if (progress >= 100) {
                    clearInterval(interval);
                    const generatedCode = `AppToken: ${appToken}, PromoId: ${promoId}`;
                    codeInput.value = generatedCode; // Set generated code
                    progressText.innerText = 'Generation complete!'; // Update text
                    generateBtn.disabled = false; // Enable generate button
                }
            }, 1000); // Change this to adjust generation speed (currently 10 seconds)
        }
    });
});
