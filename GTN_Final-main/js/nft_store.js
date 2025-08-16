const NFT_CONTRACT_ADDRESS = "0xc995a821bc3ccfd240a1152b2b0c97e668b100dd"; 
const GTN_CONTRACT_ADDRESS = "0x7efbe15df6d496fead150a4e8511e0c53384596b"; 

const GANACHE_RPC_URL = "http://127.0.0.1:7545";

let provider, signer, nftContract, gtnTokenContract, currentAccount;

const ABI_GTN = [
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
	}
];

const ABI_NFT = [
    {
        "inputs": [],
        "name": "owner",  
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",  
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNFTsForSale",
        "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
        "name": "getNFTInfo",
        "outputs": [
            { "internalType": "string", "name": "name", "type": "string" },
            { "internalType": "string", "name": "description", "type": "string" },
            { "internalType": "string", "name": "tokenURI", "type": "string" },
            { "internalType": "uint256", "name": "price", "type": "uint256" },
            { "internalType": "bool", "name": "isForSale", "type": "bool" },
            { "internalType": "address", "name": "seller", "type": "address" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
        "name": "ownerOf",
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
        "name": "buyNFT",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];


async function connectWallet() {
    if (!window.ethereum) {
        alert("🚨 MetaMask가 설치되어 있지 않습니다!");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    currentAccount = await signer.getAddress();
    
    nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, ABI_NFT, signer);
    gtnTokenContract = new ethers.Contract(GTN_CONTRACT_ADDRESS, ABI_GTN, signer); // ✅ 변경된 ABI 적용

    document.getElementById("walletAddress").textContent = `🔗 ${currentAccount}`;
    
    await checkGTNBalance();
    await loadMarketplaceNFTs();
}

async function checkGTNBalance() {
    if (!gtnTokenContract) {
        gtnTokenContract = new ethers.Contract(GTN_CONTRACT_ADDRESS, ABI_GTN, signer);
    }

    const balanceElement = document.getElementById("gtnBalance");
    if (!balanceElement) {
        console.warn("🚨 gtnBalance 요소를 찾을 수 없습니다. HTML을 확인하세요.");
        return;
    }

    try {
        const balance = await gtnTokenContract.balanceOf(currentAccount);
        const formattedBalance = ethers.utils.formatEther(balance);

        balanceElement.textContent = `GTN 잔액: ${formattedBalance} GTN`;

        // ✅ 추가된 GTN 잔액 표시 코드
        document.getElementById("gtnBalance").textContent = `GTN 잔액: ${formattedBalance} GTN`;

    } catch (error) {
        console.error("🚨 GTN 잔액 조회 실패:", error);
    }
}

function formatIPFSUrl(ipfsURI) {
    if (!ipfsURI) return "";
    if (ipfsURI.startsWith("ipfs://")) {
        return ipfsURI.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
    }
    return ipfsURI;
}

async function fetchImageFromMetadata(tokenURI) {
    console.log(`🔍 Fetching metadata from: ${tokenURI}`);

    try {
        const formattedURI = formatIPFSUrl(tokenURI);
        const response = await fetch(formattedURI);
        if (!response.ok) throw new Error(`Failed to fetch metadata: ${response.status}`);
        const metadata = await response.json();

        let imageUrl = metadata.image || "https://dummyimage.com/250x250/cccccc/000000.png&text=No+Image";
        if (imageUrl.startsWith("ipfs://")) {
            imageUrl = formatIPFSUrl(imageUrl);
        }

        return imageUrl;
    } catch (error) {
        console.error("❌ NFT 메타데이터 로드 오류:", error);
        return "https://dummyimage.com/250x250/cccccc/000000.png&text=No+Image";
    }
}

async function loadMarketplaceNFTs() {
    console.log("📌 판매 중인 NFT 목록 불러오기...");

    const nftList = document.getElementById("nftList");
    nftList.innerHTML = "";

    try {
        const tokenIds = await nftContract.getNFTsForSale();

        console.log(`🛒 판매 중인 NFT 개수 (조회된 전체): ${tokenIds.length}`);

        for (const tokenId of tokenIds) {
            const [name, description, tokenURI, price, isForSale] = await nftContract.getNFTInfo(tokenId);

            if (!isForSale) continue;

            const imageUrl = await fetchImageFromMetadata(tokenURI);

            const nftItem = document.createElement("div");
            nftItem.classList.add("nft-item");
            nftItem.innerHTML = `
                <img src="${imageUrl}" width="200">
                <p><strong>이름:</strong> ${name}</p>
                <p><strong>설명:</strong> ${description}</p>
                <p><strong>가격:</strong> ${ethers.utils.formatEther(price)} GTN</p>
                <button class="btn btn-success" onclick="buyNFT(${tokenId}, ${price})">🛒 구매하기</button>
            `;
            nftList.appendChild(nftItem);
        }
    } catch (error) {
        console.error("🚨 판매 목록 불러오기 실패:", error);
    }
}

async function buyNFT(tokenId, price) {
    try {
        console.log(`📌 NFT #${tokenId} 구매 요청 (GTN 토큰 사용)`);

        const [name, description, tokenURI, currentPrice, isForSale] = await nftContract.getNFTInfo(tokenId);
        if (!isForSale) {
            alert("🚨 상품이 이미 판매 완료되었습니다!");
            return;
        }

        const buyerBalance = await gtnTokenContract.balanceOf(currentAccount);
        const priceInWei = ethers.utils.parseEther(ethers.utils.formatEther(currentPrice.toString()));

        if (buyerBalance.lt(priceInWei)) {
            alert("❌ 보유한 GTN 토큰이 부족합니다!");
            return;
        }

        console.log("✅ GTN 전송 승인 요청...");
        const approveTx = await gtnTokenContract.approve(NFT_CONTRACT_ADDRESS, priceInWei);
        await approveTx.wait();
        console.log("✅ GTN 사용 승인 완료!");

        console.log("🚀 NFT 구매 진행 중...");
        const buyTx = await nftContract.buyNFT(tokenId);
        await buyTx.wait();

        console.log(`✅ NFT #${tokenId} 구매 성공!`);
        alert(`✅ NFT #${tokenId} 구매 성공!`);
        await checkGTNBalance();
        await loadMarketplaceNFTs();
    } catch (error) {
        console.error("🚨 GTN 구매 실패:", error);

        if (error.data?.message) {
            alert(`🚨 오류 발생: ${error.data.message}`);
        } else {
            alert("🚨 NFT 구매 중 예상치 못한 오류가 발생했습니다!");
        }
    }
}

async function checkIfAdmin() {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length === 0) {
        console.error("🚨 MetaMask 계정이 연결되지 않음!");
        return;
    }

    const userAddress = accounts[0].toLowerCase();
    console.log(`👤 현재 로그인한 지갑 주소: ${userAddress}`);

    try {
        console.log("🔍 NFT 컨트랙트 객체 확인:", nftContract);

        // ✅ `owner()` 함수가 존재하는지 확인
        if (!nftContract.owner) {
            console.error("🚨 컨트랙트에 `owner()` 함수가 존재하지 않습니다!");
            return;
        }

        // ✅ 관리자 주소 가져오기
        const adminAddress = await nftContract.owner();
        console.log(`👑 관리자 주소: ${adminAddress}`);

        // ✅ 관리자 확인 후 버튼 표시
        if (userAddress === adminAddress.toLowerCase()) {
            document.getElementById("go-nft-manage-btn").style.display = "block";
            console.log("✅ 관리자 계정 확인 완료! 버튼 표시");
        } else {
            console.log("❌ 관리자 계정이 아닙니다.");
        }
    } catch (error) {
        console.error("🚨 관리자 확인 중 오류 발생:", error);
    }
}

function logout() {
    console.log("🚪 로그아웃 실행");

    document.getElementById("walletAddress").textContent = "로그아웃됨";

    alert("로그아웃 되었습니다!");
    window.location.href = "login.html"; 
}

window.onload = async function () {
    await connectWallet();
    window.logout = logout;
};
