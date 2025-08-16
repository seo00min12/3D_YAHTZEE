const CONTRACT_ADDRESS = "0x7efbe15df6d496fead150a4e8511e0c53384596b";
const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "ItemBought",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "ItemPriceSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "buyItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getPurchaseHistory",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "hasPurchasedItem",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "itemPrices",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mintGTN",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "purchaseHistory",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "setItemPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

let provider, signer, contract, currentAccount;

let isWalletConnected = false;

if (window.location.pathname !== "/game.html") {
    connectWallet();  // 🔹 `await`을 제거 (top-level await 사용 불가 문제 해결)
}

export async function ensureContractInitialized() {  // ✅ export 추가
    if (!contract) {
        console.warn("🚨 contract가 초기화되지 않음. Metamask 연결을 시도합니다.");
        await connectWallet();
    }
}

export function getEquippedSkins() {
    let skins = JSON.parse(localStorage.getItem("equippedSkins")) || [];
    console.log("📦 getEquippedSkins() 반환값:", skins);

    // ✅ items.json에서 해당 스킨의 title을 추가
    const items = [
        { "id": 0, "title": "red_dice" },
        { "id": 1, "title": "blue_dice" },
        { "id": 2, "title": "green_dice" },
        { "id": 3, "title": "yellow_dice" },
        { "id": 4, "title": "aqua_dice" },
        { "id": 5, "title": "violet_dice" }
    ];

    // 🛑 equippedSkins 값이 비어있으면 기본값 설정
    if (skins.length === 0) {
        console.warn("⚠️ equippedSkins 데이터가 없습니다! 기본값(normal_dice) 사용");
        skins = [{ id: 0, title: "normal_dice" }];
        localStorage.setItem("equippedSkins", JSON.stringify(skins));
    }

    return skins.map(skin => {
        let matchingItem = items.find(item => item.id === skin.id);
        return { ...skin, title: matchingItem ? matchingItem.title : "unknown_dice" };
    });
}


async function initializeSolPage() {
    console.log("🔄 sol.html 초기화 중...");

    if (typeof ensureContractInitialized !== "undefined") {
        await ensureContractInitialized();
        console.log("✅ contract가 초기화됨.");
    } else {
        console.warn("⚠️ ensureContractInitialized가 정의되지 않았습니다. connectWallet을 실행합니다.");
        await connectWallet();
    }
}

async function connectWallet() {
    if (!window.ethereum) {
        alert("🚨 MetaMask가 설치되어 있지 않습니다!");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);

    if (accounts.length === 0) {
        alert("⚠️ MetaMask 계정을 선택해야 합니다!");
        return;
    }

    const metaMaskAccount = accounts[0].toLowerCase();
    const storedAccount = localStorage.getItem("userAccount");

    if (!storedAccount) {
        alert("🔑 로그인이 필요합니다!");
        window.location.href = "login.html"; // ✅ 로그인 페이지로 이동
        return;
    }

    if (storedAccount.toLowerCase() !== metaMaskAccount) {
        alert(`⚠️ 로그인한 계정(${storedAccount})과 MetaMask 계정(${metaMaskAccount})이 다릅니다.\n로그아웃 후 다시 로그인하세요.`);
        logout();
        return;
    }

    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    console.log(`✅ MetaMask 연결 완료: ${metaMaskAccount}`);
    await checkBalance();
    await loadPurchaseHistory();
}

async function checkIfUser() {
    console.log("🔄 사용자 확인 시작...");

    try {
        if (!signer) {
            console.warn("🚨 signer가 설정되지 않음. MetaMask 연결을 먼저 수행합니다.");
            await connectWallet(); // ✅ signer를 재설정하도록 보장
        }

        const currentAccount = await signer.getAddress();
        console.log(`🔍 현재 연결된 계정: ${currentAccount}`);

        // 🔹 GTN 획득 버튼 관련 로직 수정
        const getGTNButton = document.getElementById("getGTN");
        if (!getGTNButton) {
            console.error("🚨 GTN 획득 버튼을 찾을 수 없습니다!");
            return;
        }

        // ✅ 관리자가 아닌 경우에만 GTN 획득 버튼 표시
        const ownerAddress = await contract.owner();
        if (ownerAddress.toLowerCase() !== currentAccount.toLowerCase()) {
            console.log("✅ 일반 사용자입니다. GTN 획득 버튼을 표시합니다.");
            getGTNButton.style.display = "block";
        } else {
            console.log("❌ 관리자 계정입니다. GTN 획득 버튼을 숨깁니다.");
            getGTNButton.style.display = "none";
        }
    } catch (error) {
        console.error("🚨 사용자 확인 중 오류 발생:", error);
    }
}




window.ethereum.on("accountsChanged", (accounts) => {
    if (accounts.length === 0) {
        alert("⚠️ MetaMask 연결이 해제되었습니다. 다시 로그인하세요.");
        logout();
    } else {
        console.log("🔄 MetaMask 계정 변경 감지. 자동 로그아웃 처리...");
        logout();
    }
});

function logout() {
    localStorage.removeItem("userAccount");
    alert("로그아웃 되었습니다.");
    window.location.href = "login.html";
}

async function buyItem(itemId) {
    try {
        console.log(`🛒 아이템(${itemId}) 구매 시도 중...`);

        // ✅ 블록체인에서 구매 실행
        const tx = await contract.buyItem(itemId);
        await tx.wait();
        console.log(`✅ 아이템(${itemId}) 구매 완료!`);

        // ✅ 서버에 구매 내역 저장 요청
        const walletAddress = await signer.getAddress();
        const response = await fetch("http://localhost:3000/api/buy-skin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress, itemId }),
        });

        const data = await response.json();
        console.log("🔍 서버 응답:", data);

        if (data.success) {
            alert("✅ 스킨 구매 성공!");

            let purchasedSkins = await loadPurchasedSkins(); // 최신 구매 목록 가져오기
            console.log("🔄 최신 구매 목록 반영:", purchasedSkins);

            // ✅ UI 업데이트 (구매하기 → 장착하기)
            const button = document.querySelector(`[data-item-id="${itemId}"]`);
            if (button) {
                button.textContent = "장착하기";
                button.setAttribute("onclick", `equipSkin(${itemId})`);
            }

            displayDices();

        } else {
            console.error("🚨 서버 오류:", data.message);
        }
    } catch (error) {
        console.error("🚨 구매 실패:", error);
        alert("구매 실패: " + error.message);
    }
}

// async function buyItem(itemId) {
//     try {
//         console.log(`🛒 아이템(${itemId}) 구매 시도 중...`);
//         // 🔍 JSON에서 아이템 정보 가져오기
//         const items = await loadItems();
//         const selectedItem = items.find(item => item.id === itemId);
//         if (!selectedItem) {
//             console.error(`🚨 아이템 ID(${itemId})를 찾을 수 없습니다.`);
//             alert("🚨 구매할 아이템을 찾을 수 없습니다!");
//             return;
//         }
//         console.log(`🟢 선택한 아이템: ${selectedItem.title}, 가격: ${selectedItem.cost}`);
//         // 🔍 스마트 컨트랙트에서 실제 가격 조회
//         const priceWei = await contract.itemPrices(itemId);
//         const priceGTN = ethers.utils.formatUnits(priceWei, 18);
//         console.log(`💰 블록체인 가격: ${priceGTN} GTN`);
//         //  가격 검증 (JSON 파일의 가격과 비교)
//         if (selectedItem.cost.toString() !== priceGTN) {
//             console.error(`🚨 가격 불일치! JSON 가격: ${selectedItem.cost} GTN, 블록체인 가격: ${priceGTN} GTN`);
//             alert("🚨 아이템 가격이 블록체인과 다릅니다! 구매가 차단되었습니다.");
//             return;
//         }
//         //  블록체인에서 구매 실행
//         const tx = await contract.buyItem(itemId);
//         await tx.wait();
//         console.log(` 아이템(${itemId}) 구매 완료!`);
//         alert("✅ 스킨 구매 성공!");
//     } catch (error) {
//         console.error("🚨 구매 실패:", error);
//         alert("구매 실패: " + error.message);
//     }
// } 

if (typeof window.displayDices === "undefined") {
    window.displayDices = async function () {
        console.log("displayDices() 실행됨");

        const items = await loadItems();
        if (!items || items.length === 0) {
            console.warn("아이템 데이터가 없습니다. JSON 파일을 확인하세요.");
            return;
        }

        const purchasedSkins = await loadPurchasedSkins();  // 🔥 최신 구매 내역 반영
        console.log("최신 구매한 스킨 목록:", purchasedSkins);

        const container = document.getElementById("diceList");
        if (!container) {
            console.error("diceList' 요소를 찾을 수 없음. HTML을 확인하세요.");
            return;
        }

        container.innerHTML = "";

        for (const dice of items) {
            let price = "불러오는 중...";
            if (window.getItemPrice) {
                price = await window.getItemPrice(dice.id);
            }

            const isPurchased = purchasedSkins.includes(dice.id);
            const isEquipped = equippedSkins.includes(dice.id);
            const buttonLabel = isEquipped ? "장착 해제" : isPurchased ? "장착하기" : "구매하기";
            const buttonAction = isEquipped ? `unSkin(${dice.id})` : isPurchased ? `equipSkin(${dice.id})` : `buyItem(${dice.id})`;

            const card = document.createElement("div");
            card.className = "dice-card";
            card.innerHTML = `
                <img src="${dice.src}" alt="${dice.title}">
                <h3>${dice.title}</h3>
                <p>가격: ${price}</p>
                <button id="skin-btn-${dice.id}" onclick="${buttonAction}">${buttonLabel}</button>
            `;
            container.appendChild(card);
        }

        console.log("주사위 리스트 최신화 완료");
    };
}

let isAdminChecked = false;

async function checkAdmin() {
    try {
        if (!signer) { 
            console.warn("🚨 signer가 정의되지 않음. MetaMask 연결을 먼저 수행합니다.");
            await connectWallet();
        }

        const ownerAddress = await contract.owner();
        const currentAccount = await signer.getAddress();

        console.log(`🔍 [관리자 확인] 컨트랙트 소유자: ${ownerAddress}`);
        console.log(`🔍 [관리자 확인] 현재 연결된 계정: ${currentAccount}`);

        const getGTNButton = document.getElementById("getGTN");

        if (ownerAddress.toLowerCase() === currentAccount.toLowerCase()) {
            console.log("✅ 관리자 계정입니다. GTN 버튼 표시");
            getGTNButton.style.display = "block"; 
        } else {
            console.log("❌ 일반 사용자입니다. 버튼 숨김");
            getGTNButton.style.display = "none";
        }
    } catch (error) {
        console.error("🚨 관리자 확인 중 오류 발생:", error);
    }
}

// 🔹 GTN 지급 (mintGTN 호출)
async function requestGTN() {
    if (!contract) return alert("먼저 MetaMask를 연결하세요!");

    const connectedAccounts = await provider.send("eth_requestAccounts", []);
    if (connectedAccounts.length === 0) {
        alert("MetaMask 계정을 선택해야 합니다!");
        return;
    }

    let recipient = connectedAccounts[0]; // ✅ 현재 사용자의 MetaMask 주소
    console.log(`🚀 ${recipient}에게 100 GTN 전송 중...`);

    try {
        const tx = await contract.mintGTN(recipient, ethers.utils.parseUnits("100", 18));
        await tx.wait();

        alert(`✅ ${recipient}에게 100 GTN 전송 완료!`);
        checkBalance();  // ✅ GTN 잔액 즉시 갱신
        await addGTNToMetaMask();
    } catch (error) {
        console.error("🚨 GTN 전송 실패:", error);
        alert("GTN 전송 실패: " + error.message);
    }
}


async function addGTNToMetaMask() {
    if (!window.ethereum) {
        alert("MetaMask가 필요합니다!");
        return;
    }

    try {
        const wasAdded = await window.ethereum.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                    address: CONTRACT_ADDRESS,
                    symbol: "GTN",
                    decimals: 18,
                    image: "https://gateway.pinata.cloud/ipfs/QmSr7KSnGs25KJpDWksGPqGjsBMGABCTkBUVKozyoCnaMY" 
                }
            }
        });

        if (wasAdded) {
            console.log("✅ MetaMask에 GTN 토큰이 추가되었습니다!");
            alert("✅ MetaMask에 GTN 토큰이 추가되었습니다!");
        } else {
            console.log("❌ MetaMask에서 GTN 토큰 추가가 거부되었습니다.");
        }
    } catch (error) {
        console.error("🚨 MetaMask에 GTN 토큰 추가 실패:", error);
        alert("MetaMask에 GTN 토큰 추가 실패: " + error.message);
    }
}

// 🔹 GTN 잔액 조회
async function checkBalance() {
    if (!contract || !signer) {
        console.warn("🚨 contract 또는 signer가 설정되지 않음. MetaMask 연결을 먼저 수행합니다.");
        await connectWallet();
    }

    try {
        const userAddress = await signer.getAddress();
        const balance = await contract.balanceOf(userAddress);
        document.getElementById("balance").innerText = `잔액: ${ethers.utils.formatUnits(balance, 18)} GTN`;
    } catch (error) {
        console.error("🚨 잔액 조회 실패:", error);
        alert("잔액 조회 실패: " + error.message);
    }
}

async function updateItemPrices() {
    console.log("🔄 아이템 가격 업데이트 시작...");

    const items = await loadItems();

    for (const dice of items) {
        console.log(`🔍 아이템(${dice.id}) 가격 조회 요청...`);

        try {
            const priceWei = await contract.itemPrices(dice.id);
            const priceGTN = ethers.utils.formatUnits(priceWei, 18);

            console.log(`✅ 아이템(${dice.id}) 가격 조회 성공: ${priceGTN} GTN`);

            const priceElement = document.getElementById(`price-${dice.id}`);
            if (priceElement) {
                priceElement.textContent = `${priceGTN}`;
            } else {
                console.warn(`⚠️ 가격 표시 요소가 존재하지 않음: price-${dice.id}`);
            }
        } catch (error) {
            console.error(`🚨 아이템(${dice.id}) 가격 조회 실패:`, error);
        }
    }

    console.log("✅ 아이템 가격 업데이트 완료!");
}



async function loadItems() {
    try {
        const response = await fetch("items.json");
        if (!response.ok) throw new Error("아이템 데이터를 불러오는데 실패했습니다.");

        const data = await response.json();
        console.log("✅ items.json 데이터 로드 성공:", data);
        return data;
    } catch (error) {
        console.error("🚨 items.json 데이터 로드 실패:", error);
        return [];
    }
}


let equippedSkin = null;

function loadEquippedItems() {
    const equippedSkins = JSON.parse(localStorage.getItem("equippedSkins")) || [];

    if (equippedSkins.length === 0) {
        console.warn("⚠️ equippedSkins 데이터가 없습니다! 기본값(normal_dice) 및 기본 맵 사용");
        equippedSkins.push({ id: 0, title: "normal_dice" }); // 기본 주사위 추가
        equippedSkins.push({ id: 100, title: "normal" }); // 기본 맵 추가
        localStorage.setItem("equippedSkins", JSON.stringify(equippedSkins));
    }

    let equippedDice = equippedSkins.find(skin => skin.id < 100); // 주사위 (ID 100 미만)
    let equippedMap = equippedSkins.find(skin => skin.id >= 100); // 맵 (ID 100 이상)

    console.log("🎭 현재 장착된 주사위:", equippedDice ? equippedDice.title : "없음");
    console.log("🌍 현재 장착된 맵:", equippedMap ? equippedMap.title : "없음");

    // ✅ 주사위 실행 (script 로드)
    if (equippedDice) {
        const diceScriptFile = `/assets/dices/${equippedDice.title}.js`;
        console.log(`📜 로드할 주사위 스크립트 파일: ${diceScriptFile}`);

        const scriptElement = document.createElement("script");
        scriptElement.src = diceScriptFile;
        scriptElement.onload = () => console.log(`✅ ${diceScriptFile} 로드 완료`);
        scriptElement.onerror = () => console.error(`🚨 ${diceScriptFile} 로드 실패`);

        document.body.appendChild(scriptElement);
    }

    // ✅ 맵 실행 (.glb 로드)
    if (equippedMap) {
        const mapFile = `/assets/maps/${equippedMap.title}.glb`;
        console.log(`🗺️ 로드할 맵 파일: ${mapFile}`);

        // THREE.js 또는 Babylon.js 같은 라이브러리에서 맵을 로드하도록 설정
        if (window.loadGLBMap) {
            window.loadGLBMap(mapFile);
        } else {
            console.warn("⚠️ loadGLBMap 함수가 정의되지 않음! 맵을 로드할 수 없습니다.");
        }
    }
}

// ✅ 게임 실행 시 장착된 주사위와 맵 로드
window.onload = async function () {
    loadEquippedItems();
};


async function updateSkinButtons() {
    console.log("🔄 스킨 버튼 업데이트 시작");

    let walletAddress;
    try {
        walletAddress = (await signer.getAddress()).toLowerCase();
    } catch (error) {
        console.error("🚨 walletAddress 가져오기 실패:", error);
        return;
    }

    // ✅ API 경로 확인 (존재하는 경로로 변경해야 함)
    let apiUrl = "http://localhost:3000/api/get-purchased-skins"; // 서버에서 확인 필요
    let purchasedSkins = [];

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress }),
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const purchasedData = await response.json();
        console.log("📦 구매한 스킨 데이터:", purchasedData);

        if (!purchasedData.success) {
            console.error("🚨 구매한 스킨을 가져오지 못했습니다:", purchasedData.message);
            return;
        }

        purchasedSkins = purchasedData.purchasedSkins || [];
    } catch (error) {
        console.error(`🚨 구매한 스킨 API 호출 실패: ${error.message}`);
        return;
    }

    // ✅ 현재 장착된 스킨 불러오기
    const equippedSkins = JSON.parse(localStorage.getItem("equippedSkins")) || [];
    console.log("🎭 현재 장착된 스킨:", equippedSkins);

    // ✅ 모든 스킨 버튼을 업데이트
    document.querySelectorAll("[id^='skin-btn-']").forEach(button => {
        const skinId = parseInt(button.getAttribute("data-skin-id"));

        if (isNaN(skinId)) {
            console.error(`🚨 버튼에 연결된 잘못된 skinId: ${skinId}`);
            return;
        }

        // ✅ 구매한 스킨인지 확인
        if (purchasedSkins.includes(skinId)) {
            // 현재 장착된 스킨이면 "장착 해제", 아니면 "장착하기" 버튼 표시
            if (equippedSkins.length > 0 && equippedSkins[0].id === skinId) {
                button.innerText = "장착 해제";
                button.setAttribute("onclick", `unSkin(${skinId})`);
            } else {
                button.innerText = "장착하기";
                button.setAttribute("onclick", `equipSkin(${skinId})`);
            }
        } else {
            // ✅ 구매하지 않은 스킨은 "구매 필요" 버튼 표시
            button.innerText = "구매 필요";
            button.setAttribute("onclick", `alert('🚨 이 스킨을 구매해야 사용할 수 있습니다!')`);
        }
    });

    console.log("✅ 스킨 버튼 업데이트 완료!");
}


// 장착하기 리스트
let equippedSkins = [];

async function equipSkin(skinId) {
    const items = await loadItems();
    const selectedSkin = items.find(item => item.id === skinId);

    if (!selectedSkin) {
        console.error(`🚨 스킨 ID ${skinId}에 해당하는 아이템을 찾을 수 없습니다.`);
        alert("스킨 정보를 찾을 수 없습니다.");
        return;
    }

    const skinTitle = selectedSkin.title || "기본 스킨"; // ✅ title이 없을 경우 기본값 설정
    console.log(`🎭 스킨 장착: ID ${skinId}, Title ${skinTitle}`);

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length === 0) {
        alert("지갑이 연결되지 않았습니다!");
        return;
    }

    const walletAddress = accounts[0].toLowerCase();

    try {
        // ✅ 기존 장착된 스킨 확인 후 해제
        const checkResponse = await fetch("http://localhost:3000/api/get-skins", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress }),
        });

        const checkData = await checkResponse.json();
        console.log(`🔍 현재 장착된 스킨 확인:`, checkData);

        // ✅ 맵과 주사위를 구분 (ID 100 이상이면 맵, 100 미만이면 주사위)
        const isMap = skinId >= 100;

        if (checkData.success && checkData.equippedSkin && checkData.equippedSkin.id !== null) {
            const equippedSkin = checkData.equippedSkin;

            // ✅ 같은 유형(맵/주사위)의 기존 스킨이 장착되어 있는 경우, 해제
            if ((isMap && equippedSkin.id >= 100) || (!isMap && equippedSkin.id < 100)) {
                if (equippedSkin.id === skinId) {
                    alert(`이미 '${skinTitle}' 스킨이 장착되어 있습니다.`);
                    return;
                }

                const confirmUnEquip = confirm(
                    `이미 '${equippedSkin.title}' 스킨이 장착되어 있습니다.\n` +
                    `새로운 스킨을 장착하려면 기존 스킨을 해제해야 합니다. 계속하시겠습니까?`
                );

                if (!confirmUnEquip) return;

                // ✅ 기존 같은 유형의 스킨만 해제
                await unSkin(equippedSkin.id);
            }
        }

        // ✅ 새로운 스킨 장착
        const response = await fetch("http://localhost:3000/api/equip-skin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress, skinId, skinTitle })
        });

        const result = await response.json();
        console.log(`✅ 서버 응답 데이터:`, result);

        if (result.success) {
            alert(result.message);

            // ✅ localStorage 업데이트
            let equippedSkins = JSON.parse(localStorage.getItem("equippedSkins")) || [];

            // ✅ 기존 장착된 같은 유형(맵/주사위)의 스킨 제거
            equippedSkins = equippedSkins.filter(skin => (isMap ? skin.id < 100 : skin.id >= 100));

            // ✅ 새 스킨 추가
            equippedSkins.push({ id: skinId, title: skinTitle });

            localStorage.setItem("equippedSkins", JSON.stringify(equippedSkins));

            // ✅ storage 이벤트 트리거
            window.dispatchEvent(new Event("storage"));

            // ✅ 버튼 상태 즉시 업데이트
            updateSkinButtons();

            // ✅ 버튼 직접 수정 (즉시 반영)
            const button = document.getElementById(`skin-btn-${skinId}`);
            if (button) {
                button.innerText = "장착 해제";
                button.setAttribute("onclick", `unSkin(${skinId})`);
            }
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("🚨 스킨 장착 실패:", error);
        alert("스킨 장착 중 오류가 발생했습니다.");
    }
}



async function unSkin() {
    console.log(`🎭 스킨 장착 해제 시도 중...`);

    // ✅ MetaMask 연결 확인
    if (!window.ethereum) {
        alert("MetaMask가 설치되지 않았습니다.");
        return;
    }

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length === 0) {
        alert("MetaMask에 로그인 후 다시 시도해주세요.");
        return;
    }

    let walletAddress = accounts[0].toLowerCase();

    console.log(`🔍 장착 해제 요청 - walletAddress: ${walletAddress}`);

    try {
        const response = await fetch("http://localhost:3000/api/un-equip-skin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress }),
        });

        const data = await response.json();
        console.log("✅ 서버 응답 데이터:", data);

        if (data.success) {
            localStorage.removeItem("equippedSkins");

            // ✅ storage 이벤트 트리거
            window.dispatchEvent(new Event("storage"));

            // ✅ UI 업데이트 (스킨 목록 다시 불러오기)
            await displayDices();

            alert("✅ 스킨 장착 해제 성공!");
        } else {
            alert("🚨 스킨 장착 해제 실패: " + data.message);
        }
    } catch (error) {
        console.error("🚨 스킨 장착 해제 오류:", error);
        alert("스킨 장착 해제 중 오류가 발생했습니다.");
    }
}


window.equipSkin = equipSkin;
window.unSkin = unSkin;


async function loadPurchasedSkins() {
    console.log("🔄 구매한 스킨 목록 불러오는 중...");

    let walletAddress;
    try {
        walletAddress = (await signer.getAddress()).toLowerCase();
    } catch (error) {
        console.error("🚨 walletAddress 가져오기 실패:", error);
        return [];
    }

    try {
        const response = await fetch("http://localhost:3000/api/get-purchased-skins", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress }),
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const purchasedData = await response.json();
        console.log("📦 구매한 스킨 데이터:", purchasedData);

        if (!purchasedData.success) {
            console.error("🚨 구매한 스킨을 가져오지 못했습니다:", purchasedData.message);
            return [];
        }

        // 🔹 items.json & items2.json 불러오기
        const items1 = await fetch("items.json").then(res => res.json());
        const items2 = await fetch("items2.json").then(res => res.json());
        const allItems = [...items1, ...items2]; // 🔥 모든 아이템 합치기

        // 🔹 ID → title 매칭 후 변환
        const purchasedTitles = purchasedData.purchasedSkins.map(id => {
            const item = allItems.find(i => i.id === Number(id));
            return item ? item.title : `알 수 없는 스킨 (ID: ${id})`;
        });

        console.log("✅ 변환된 스킨 목록:", purchasedTitles);
        return purchasedTitles; // 🔥 ID 대신 title 반환
    } catch (error) {
        console.error(`🚨 구매한 스킨 API 호출 실패: ${error.message}`);
        return [];
    }
}


async function displayDices() {
    const items = await loadItems();
    const container = document.getElementById("diceList");
    container.innerHTML = "";

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length === 0) {
        console.error("🚨 지갑이 연결되지 않았습니다!");
        return;
    }

    const walletAddress = accounts[0].toLowerCase();

    let purchasedSkins = [];
    let equippedSkin = null;

    try {
        const response = await fetch("http://localhost:3000/api/get-skins", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress }),
        });

        const data = await response.json();
        if (data.success) {
            purchasedSkins = data.purchasedSkins || [];
            equippedSkin = data.equippedSkin || { id: null, title: "" };
        } else {
            console.warn("⚠️ 스킨 정보 로드 실패:", data.message);
        }
    } catch (error) {
        console.error("🚨 스킨 정보 가져오기 실패:", error);
    }

    for (const dice of items) {
        let price = "불러오는 중...";
        if (window.getItemPrice) {
            price = await window.getItemPrice(dice.id);
        }

        let buttonText = "구매하기";
        let buttonAction = `buyItem(${dice.id})`;

        if (purchasedSkins.includes(dice.id)) {
            buttonText = "장착하기";
            buttonAction = `equipSkin(${dice.id})`;

            if (equippedSkin.id === dice.id) {
                buttonText = "장착 해제";
                buttonAction = `unSkin()`;
            }
        }

        const card = document.createElement("div");
        card.className = "dice-card";
        card.innerHTML = `
            <img src="${dice.src}" alt="${dice.title}">
            <h3>${dice.title}</h3>
            <p>가격: ${price}</p>
            <button id="skin-btn-${dice.id}" onclick="${buttonAction}">${buttonText}</button>
        `;

        container.appendChild(card);
    }
}



async function rollDice() {
    if (!window.loadItems) return alert("아이템 데이터를 불러올 수 없습니다!");
    
    const items = await loadItems();
    const diceResult = Math.floor(Math.random() * items.length);
    document.getElementById("result").innerText = `🎲 주사위 결과: ${items[diceResult].title} 선택됨!`;
}

async function getItemPrice(itemId) {
    if (!contract) {
        console.warn("🚨 스마트 컨트랙트가 연결되지 않았습니다! Metamask를 먼저 연결하세요.");
        return "가격 확인 불가";
    }

    try {
        console.log(`🔍 아이템(${itemId}) 가격 조회 요청...`);

        const priceBN = await contract.itemPrices(itemId);

        if (priceBN.toString() === "0") {
            console.warn(`🚨 경고: ID ${itemId}에 대한 가격이 설정되지 않았거나 0입니다.`);
            return "가격 없음";
        }

        const formattedPrice = ethers.utils.formatUnits(priceBN, 18) + " GTN";
        console.log(`✅ 아이템(${itemId}) 가격 조회 성공: ${formattedPrice}`);
        return formattedPrice;
    } catch (error) {
        console.error(`🚨 아이템(${itemId}) 가격 조회 실패:`, error);
        return "가격 확인 불가";
    }
}


let isAccountListenerAdded = false;

async function listenForAccountChange() {
    if (!window.ethereum || isAccountListenerAdded) {
        return;
    }

    window.ethereum.on("accountsChanged", async (accounts) => {
        if (accounts.length === 0) {
            alert("MetaMask 연결이 해제되었습니다. 다시 로그인하세요.");
            localStorage.removeItem("userAccount");
            window.location.href = "login.html";
            return;
        }

        const newMetaMaskAccount = accounts[0].toLowerCase();
        const storedAccount = localStorage.getItem("userAccount");

        if (storedAccount.toLowerCase() !== newMetaMaskAccount) {
            alert(`⚠️ 로그인한 계정(${storedAccount})과 MetaMask 계정(${newMetaMaskAccount})이 다릅니다.`);
            return;
        }

        await connectWallet(); 
    });

    isAccountListenerAdded = true;
}

listenForAccountChange();


async function loadPurchaseHistory() {
    console.log("🔄 구매한 스킨 목록 불러오는 중...");

    let walletAddress;
    try {
        walletAddress = (await signer.getAddress()).toLowerCase();
    } catch (error) {
        console.error("🚨 walletAddress 가져오기 실패:", error);
        return;
    }

    try {
        // 🛠 서버에서 구매한 스킨 ID 목록 가져오기
        const response = await fetch("http://localhost:3000/api/get-purchased-skins", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress }),
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const purchasedData = await response.json();
        console.log("📦 구매한 스킨 데이터:", purchasedData);

        if (!purchasedData.success) {
            console.error("🚨 구매한 스킨을 가져오지 못했습니다:", purchasedData.message);
            return;
        }

        // 🛠 `items.json` & `items2.json` 불러오기
        const items1 = await fetch("items.json").then(res => res.json());
        const items2 = await fetch("items2.json").then(res => res.json());
        const allItems = [...items1, ...items2]; // 🔥 모든 아이템 합치기

        // 🔹 ID → title 매칭 후 변환
        const purchasedTitles = purchasedData.purchasedSkins.map(id => {
            const item = allItems.find(i => i.id === Number(id));
            return item ? item.title : `알 수 없는 스킨 (ID: ${id})`;
        });

        console.log("✅ 변환된 스킨 목록:", purchasedTitles);

        // 🛠 HTML 업데이트
        const purchaseList = document.getElementById("purchaseList");
        purchaseList.innerHTML = "";

        if (purchasedTitles.length === 0) {
            purchaseList.innerHTML = "<li>구매 내역이 없습니다.</li>";
        } else {
            purchasedTitles.forEach(title => {
                const listItem = document.createElement("li");
                listItem.textContent = `🎲 구매한 스킨: ${title}`;
                purchaseList.appendChild(listItem);
            });
        }
    } catch (error) {
        console.error(`🚨 구매한 스킨 API 호출 실패: ${error.message}`);
    }
}


async function debugPurchaseHistory() {
    if (!signer) {
        console.warn("signer가 설정되지 않음. MetaMask 연결을 먼저 수행합니다.");
        await connectWallet();
    }

    try {
        const userAddress = await signer.getAddress();
        const purchasedItems = await contract.getPurchaseHistory(userAddress);

        console.log("[디버깅] 현재 블록체인에서 반환된 구매 내역:", purchasedItems);
    } catch (error) {
        console.error("[디버깅 실패] 구매 내역을 가져오는 중 오류 발생:", error);
    }
}

debugPurchaseHistory();

window.loadPurchaseHistory = loadPurchaseHistory;

window.onload = async function () {
    console.log("🔄 페이지 로딩 완료, 초기화 시작...");

    try {
        await connectWallet();  // ✅ MetaMask 연결 우선 실행

        const currentPath = window.location.pathname;
        console.log(`📍 현재 페이지: ${currentPath}`);

        if (currentPath.includes("sol.html")) {
            console.log("🟢 sol.html 페이지 초기화 중...");
            await initializeSolPage();
            await loadPurchaseHistory();
            await displayDices();
            loadEquippedItems();  // 🔹 장착한 스킨 로드
        } else if (currentPath.includes("nft_store.html")) {
            console.log("🟢 nft_store.html 페이지 초기화 중...");
            await loadMarketplaceNFTs();
            await checkIfAdmin();  // ✅ 관리자 확인 함수 실행 (NFT 관리 버튼 표시 여부)
            await checkGTNBalance();  // ✅ GTN 잔액 표시
        } else if (currentPath.includes("dice_store.html")) {
            console.log("🟢 dice_store.html 페이지 초기화 중...");
            await checkIfUser();  // ✅ 일반 사용자 계정에서 GTN 획득 버튼 표시
            await displayDices();  // ✅ 주사위 목록 로드
            await checkBalance();  // ✅ GTN 잔액 조회
            await updateItemPrices(); // ✅ 아이템 가격 업데이트 추가
        } else {
            console.log("🟡 기본 초기화 실행...");
        }

        console.log("✅ 모든 초기화 완료.");
    } catch (error) {
        console.error("🚨 초기화 중 오류 발생:", error);
    }
};



window.getItemPrice = getItemPrice;
window.connectWallet = connectWallet;
window.checkBalance = checkBalance;
window.buyItem = buyItem;
window.requestGTN = requestGTN;
window.checkAdmin = checkAdmin;
window.rollDice = rollDice;
window.displayDices = displayDices;