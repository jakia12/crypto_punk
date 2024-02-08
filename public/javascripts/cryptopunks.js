var Cryptopunks = {};

Cryptopunks.NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
Cryptopunks.AGREE_TO_TERMS = "_Cryptopunks_Agree_To_Terms";
Cryptopunks.TX_HASHES = "_Cryptopunks_Hashes";
Cryptopunks.TX_DIV_ID = "#pendingTransactions";
Cryptopunks.EVENT_START_BLOCK = 3914490;
Cryptopunks.ETHER_CONVERSION = {USD: 230.999999};

Cryptopunks.INFURA_ID = "418824fdf3d7419cba09b86bbdf059af"

Cryptopunks.currentPunkIndex = -1;

Cryptopunks.PunkState = {
    agreedToTermsStatus: 0, // 0 = not yet agreed, 1 = agreed, 2 = denied
	web3Queried: false,
    web3ready: false,
    web3NotPresent: false,
    web3Modal: undefined,
    accountQueried: false,
    accountUnlocked: false,
    account: null,
    accountHasBalance: false,
    accountBalanceInWei: 0,
    accountBalanceInEther: 0,
    currentChainId: "",
    transactions: [],
    isOwned: true,
    isOwner: false,
    isWrapped: false,
    isLegacyWrapped: false,
    canBuy: false,
    forSale: false,
    hasBid: false,
    ownsBid: false,
    punkData: {
	    loadComplete: false,
	    punkIndex: -1,
        owner: Cryptopunks.NULL_ADDRESS,
        offerValue: 0,
        onlySellTo: Cryptopunks.NULL_ADDRESS,
        bidder: Cryptopunks.NULL_ADDRESS,
        bidValue: 0,
    },
    loadingDone: {
	    owner: false,
	    bid: false,
        offer: false,
        eventsClaimed: false
    }
};

Cryptopunks.ABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string", "value": "CRYPTOPUNKS"}], "payable": false, "type": "function"}, { "constant": true, "inputs": [{"name": "", "type": "uint256"}], "name": "punksOfferedForSale", "outputs": [{"name": "isForSale", "type": "bool", "value": false}, { "name": "punkIndex", "type": "uint256", "value": "0"}, { "name": "seller", "type": "address", "value": "0x0000000000000000000000000000000000000000"}, {"name": "minValue", "type": "uint256", "value": "0"}, { "name": "onlySellTo", "type": "address", "value": "0x0000000000000000000000000000000000000000"}], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}], "name": "enterBidForPunk", "outputs": [], "payable": true, "type": "function"}, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256", "value": "10000"}], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}, {"name": "minPrice", "type": "uint256"}], "name": "acceptBidForPunk", "outputs": [], "payable": false, "type": "function"}, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8", "value": "0"}], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "addresses", "type": "address[]"}, {"name": "indices", "type": "uint256[]"}], "name": "setInitialOwners", "outputs": [], "payable": false, "type": "function"}, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "type": "function"}, { "constant": true, "inputs": [], "name": "imageHash", "outputs": [{ "name": "", "type": "string", "value": "ac39af4793119ee46bbff351d8cb6b5f23da60222126add4268e261199a2921b"}], "payable": false, "type": "function"}, { "constant": true, "inputs": [], "name": "nextPunkIndexToAssign", "outputs": [{"name": "", "type": "uint256", "value": "0"}], "payable": false, "type": "function"}, { "constant": true, "inputs": [{"name": "", "type": "uint256"}], "name": "punkIndexToAddress", "outputs": [{"name": "", "type": "address", "value": "0xc352b534e8b987e036a93539fd6897f53488e56a"}], "payable": false, "type": "function"}, { "constant": true, "inputs": [], "name": "standard", "outputs": [{"name": "", "type": "string", "value": "CryptoPunks"}], "payable": false, "type": "function"}, { "constant": true, "inputs": [{"name": "", "type": "uint256"}], "name": "punkBids", "outputs": [{"name": "hasBid", "type": "bool", "value": false}, { "name": "punkIndex", "type": "uint256", "value": "0"}, { "name": "bidder", "type": "address", "value": "0x0000000000000000000000000000000000000000"}, {"name": "value", "type": "uint256", "value": "0"}], "payable": false, "type": "function"}, { "constant": true, "inputs": [{"name": "", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256", "value": "0"}], "payable": false, "type": "function"}, { "constant": false, "inputs": [], "name": "allInitialOwnersAssigned", "outputs": [], "payable": false, "type": "function"}, { "constant": true, "inputs": [], "name": "allPunksAssigned", "outputs": [{"name": "", "type": "bool", "value": true}], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}], "name": "buyPunk", "outputs": [], "payable": true, "type": "function"}, { "constant": false, "inputs": [{"name": "to", "type": "address"}, {"name": "punkIndex", "type": "uint256"}], "name": "transferPunk", "outputs": [], "payable": false, "type": "function"}, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string", "value": "Ͼ"}], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}], "name": "withdrawBidForPunk", "outputs": [], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "to", "type": "address"}, {"name": "punkIndex", "type": "uint256"}], "name": "setInitialOwner", "outputs": [], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}, { "name": "minSalePriceInWei", "type": "uint256"}, {"name": "toAddress", "type": "address"}], "name": "offerPunkForSaleToAddress", "outputs": [], "payable": false, "type": "function"}, { "constant": true, "inputs": [], "name": "punksRemainingToAssign", "outputs": [{"name": "", "type": "uint256", "value": "0"}], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}, {"name": "minSalePriceInWei", "type": "uint256"}], "name": "offerPunkForSale", "outputs": [], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}], "name": "getPunk", "outputs": [], "payable": false, "type": "function"}, { "constant": true, "inputs": [{"name": "", "type": "address"}], "name": "pendingWithdrawals", "outputs": [{"name": "", "type": "uint256", "value": "0"}], "payable": false, "type": "function"}, { "constant": false, "inputs": [{"name": "punkIndex", "type": "uint256"}], "name": "punkNoLongerForSale", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "payable": true, "type": "constructor"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "to", "type": "address"}, { "indexed": false, "name": "punkIndex", "type": "uint256"}], "name": "Assign", "type": "event"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"}, { "indexed": true, "name": "to", "type": "address"}, {"indexed": false, "name": "value", "type": "uint256"}], "name": "Transfer", "type": "event"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"}, { "indexed": true, "name": "to", "type": "address"}, {"indexed": false, "name": "punkIndex", "type": "uint256"}], "name": "PunkTransfer", "type": "event"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "punkIndex", "type": "uint256"}, { "indexed": false, "name": "minValue", "type": "uint256"}, {"indexed": true, "name": "toAddress", "type": "address"}], "name": "PunkOffered", "type": "event"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "punkIndex", "type": "uint256"}, { "indexed": false, "name": "value", "type": "uint256"}, {"indexed": true, "name": "fromAddress", "type": "address"}], "name": "PunkBidEntered", "type": "event"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "punkIndex", "type": "uint256"}, { "indexed": false, "name": "value", "type": "uint256"}, {"indexed": true, "name": "fromAddress", "type": "address"}], "name": "PunkBidWithdrawn", "type": "event"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "punkIndex", "type": "uint256"}, { "indexed": false, "name": "value", "type": "uint256"}, {"indexed": true, "name": "fromAddress", "type": "address"}, { "indexed": true, "name": "toAddress", "type": "address"}], "name": "PunkBought", "type": "event"}, { "anonymous": false, "inputs": [{"indexed": true, "name": "punkIndex", "type": "uint256"}], "name": "PunkNoLongerForSale", "type": "event"}];
const Erc721ABI = [{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

Vue.component('account-link', {
    props: ['account'],
    template: '<a v-bind:href="\'/cryptopunks/accountInfo?account=\'+account">{{ account.substring(0,8) }}</a>'
});

Vue.component('transaction-link', {
    props: ['hash'],
    template: '<a v-bind:href="\'https://etherscan.io/tx/\'+hash">{{hash.substring(0,8)}}</a>'
});

Vue.component('value-display', {
    data: function() {
        return {
            etherConversion: Cryptopunks.ETHER_CONVERSION
        };
    },
    props: ['amount', 'short'],
    computed: {
        valueStr: function() {
            var ether = Number(web3.utils.fromWei(this.amount.toString(), 'ether'));
            var usdVal = (ether * this.etherConversion.USD);
            var usdValStr = '$'+usdVal.toFixed(2);

            var fractionDigits = 2;
            if (this.short) fractionDigits = 0;

            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: fractionDigits,
                maximumFractionDigits: fractionDigits,
            });
            if (formatter) {
                usdValStr = formatter.format(usdVal);
            }

            // The divide by 1 here removes trailing zeros
            if (this.short) {
                return '' + (ether.toPrecision(4) / 1) + ' (' + usdValStr + ')';
            } else {
                return '' + (ether.toPrecision(4) / 1) + ' ETH (' + usdValStr + ' USD)';
            }
        }
    },
    template: '<span>{{valueStr}}</span>'
});

$('.cryptopunks-vue').each(function () {
    var $el = $(this)

    new Vue({
        el: this,
        data: {
            state: Cryptopunks.PunkState
        },
    })
});

var panel1 = new Vue({
    el: '#ethereum_panels',
    data: {
        state: Cryptopunks.PunkState,
        agreeToTerms: "no",
        connectPanelHidden: false,
    },
    mounted() {
        if (localStorage.agreeToTerms) {
            this.agreeToTerms = localStorage.agreeToTerms;
        }
    },
    watch: {
        agreeToTerms(newVal) {
            localStorage.agreeToTerms = newVal;
        }
    },
    computed: {
        currentChainId: function() {
            return this.state.currentChainId;
        },
        accountShort: function() {
            if (this.state.accountUnlocked) {
                return this.state.account.substring(0,10);
            } else {
                return "none";
            }
        },
        showFullPanel: function() {
            return !this.connectPanelHidden && this.state.accountUnlocked && this.agreeToTerms === 'yes';
        },
        showUnlockPanel: function() {
            return !this.state.accountUnlocked && this.agreeToTerms === 'yes';
        },
        showTermsPanel: function() {
            return this.agreeToTerms === 'no';
        },
    },
    methods: {
        userAgreeToTerms: function (event) {
            this.agreeToTerms = "yes";
            // localStorage.setItem(Cryptopunks.AGREE_TO_TERMS, "yes");
        },
        userRejectTerms: function (event) {
            this.agreeToTerms = "deny";
            // this.state.agreedToTermsStatus = 2;
            // localStorage.setItem(Cryptopunks.AGREE_TO_TERMS, "deny");
        },
        showConnectPanel: function () {
            this.connectPanelHidden = false;
        },
        hideConnectPanel: function () {
            this.connectPanelHidden = true;
        },
        clearTransactions: function(event) {
            event.preventDefault()
            event.stopPropagation()
            localStorage.setItem(Cryptopunks.TX_HASHES, JSON.stringify([]));
            Cryptopunks.PunkState.transactions = [];
        },
        navigateToAccount: function (event) {
            event.preventDefault()
            event.stopPropagation()
            window.location.href = '/cryptopunks/accountInfo?account=' + this.state.account
        }
    }
});

/*
var panel2 = new Vue({
    el: '#ethereum_no_account',
    data: {
        state: Cryptopunks.PunkState
    }
});

var panel3 = new Vue({
    el: '#ethereum_no_web3',
    data: {
        state: Cryptopunks.PunkState
    }
});
*/

Cryptopunks.convertToDecimalString = (value) => {
    if (typeof value === 'string' && value.startsWith('0x')) {
        return parseInt(value, 16).toString();
    }

    // If it's already a number or a decimal string, convert it to a string
    if (typeof value === 'number' || (/^\d+$/.test(value))) {
        return value.toString();
    }

    // If it doesn't match any of the above cases, return as is.
    return value;
}

window.addEventListener('WalletConnectModalProviderLoaded', async function() {
    Cryptopunks.web3Modal = window.WalletConnectModalProvider;
    
    if (Cryptopunks.web3Modal.accounts.length !== 0) {
        Cryptopunks.PunkState.currentChainId = Cryptopunks.convertToDecimalString(Cryptopunks.web3Modal.chainId);
        await Cryptopunks.updateProvider(Cryptopunks.web3Modal);
    }
    // Modern dapp browsers...
    else if (window.ethereum) {
        // We parse the hex chainId to decimal
        const chainId = await window.ethereum.request({
            method: "eth_chainId",
          });
        Cryptopunks.PunkState.currentChainId = Cryptopunks.convertToDecimalString(chainId);
        await Cryptopunks.updateProvider(window.ethereum);
    }
	// Checking if Web3 has been injected by the browser (Mist/MetaMask)
	else if (typeof web3 !== 'undefined') {
		// Use MetaMask's provider
        Cryptopunks.PunkState.currentChainId = Cryptopunks.convertToDecimalString(web3.currentProvider.chainId);

        await Cryptopunks.updateProvider(web3.currentProvider)
    } 
    else {
		console.log("No web3 present.");
        web3 = null;
        Cryptopunks.PunkState.web3NotPresent = true;
    }

	Cryptopunks.PunkState.web3Queried = true;

    startApp();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

var startApp = function () {
	if (web3) {
        Cryptopunks.PunkState.web3ready = true;

        Cryptopunks.restoreTransactions();
        setInterval(Cryptopunks.checkTransactions, 1000);

        $.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD', function(data) {
            Cryptopunks.ETHER_CONVERSION.USD = data.USD;
            console.log("Value of ether now " + Cryptopunks.ETHER_CONVERSION.USD);
            
            Cryptopunks.checkValidChainId();
        })
	}
};

Cryptopunks.updateAccounts = async () => {
    web3.eth.getAccounts().then((accounts) => {
        if (accounts.length === 0) {
            Cryptopunks.disconnect();
        } else if (accounts[0] !== Cryptopunks.PunkState.account) {
            console.log("Connected wallet address changed: " + accounts[0]);
            Cryptopunks.PunkState.account = accounts[0];
            web3.eth.defaultAccount = accounts[0];
            Cryptopunks.punkContract.defaultAccount = accounts[0];
            if (Cryptopunks.PunkState.account === undefined) {
                Cryptopunks.PunkState.accountUnlocked = false;
            } else {
                Cryptopunks.refreshPendingWidthdrawals();
                Cryptopunks.PunkState.accountUnlocked = true;
            }

            if (typeof cryptopunksContractLoadedCallback !== 'undefined') {
                cryptopunksContractLoadedCallback();
            }
        }
        Cryptopunks.PunkState.accountQueried = true;
    })
}

Cryptopunks.updateProvider = async (provider) => {
    window.web3 = new Web3(provider);
    var contractAddress = ADDRESS_PUNKS_CONTRACT;
    Cryptopunks.punkContract = new web3.eth.Contract(Cryptopunks.ABI, contractAddress);

    await Cryptopunks.updateAccounts();

    // Subscribe to chainId change
    provider.on("accountsChanged", async (accounts) => {
        console.log("accountsChanged", accounts);
        await Cryptopunks.updateAccounts();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        //todo handle chain id change
        console.log("chainChanged", chainId);

        Cryptopunks.closeChainErrorModal();
        Cryptopunks.PunkState.currentChainId = Cryptopunks.convertToDecimalString(chainId);

        if (Cryptopunks.PunkState.currentChainId === CHAIN_ID) {
            location.reload();
        } else {
            Cryptopunks.checkValidChainId();
        }

    });

    // Subscribe to session disconnection
    // metamask does not fire this event, instead an accountsChanged with 0 accounts
    provider.on("disconnect", (code, reason) => {
        console.log("disconnect", code, reason);
        Cryptopunks.disconnect();
        location.reload();
    });
}

Cryptopunks.disconnect = () => {
    Cryptopunks.account = undefined;
    Cryptopunks.PunkState.account = undefined;
    Cryptopunks.PunkState.accountUnlocked = false;
    web3.eth.defaultAccount = undefined;
}

Cryptopunks.connectModal = async () => {
    if (Cryptopunks.PunkState.currentChainId?.length > 0 && Cryptopunks.PunkState.currentChainId !== CHAIN_ID && web3.eth.defaultAccount) {
        Cryptopunks.showChainErrorModal();
    } else {
        if(window.ethereum) {
            // Show the Menu with MetaMask and WalletConnect
            Cryptopunks.showWeb3Menu();
        } else {
            // Open WalletConnect Modal
            Cryptopunks.connectWalletConnect();
        }
    }
}

Cryptopunks.showWeb3Menu = () => {
    let web3Menu = document.getElementById('web3Menu');
    if (web3Menu) {
        web3Menu.style.display = "block";
    }
}

Cryptopunks.showChainErrorModal = () => {
    let chainErrorModal = document.getElementById('chainErrorModal');
    if (chainErrorModal && Cryptopunks.PunkState.currentChainId !== CHAIN_ID) {
        chainErrorModal.style.display = "block";
    }
}

Cryptopunks.closeWeb3Menu = () => {
    let web3Menu = document.getElementById('web3Menu');
    if (web3Menu) {
        web3Menu.style.display = "none";
    }
}

Cryptopunks.closeChainErrorModal = () => {
    let chainErrorModal = document.getElementById('chainErrorModal');
    if (chainErrorModal) {
        chainErrorModal.style.display = "none";
    }
}

Cryptopunks.checkValidChainId = () => {
    if (Cryptopunks.PunkState.currentChainId?.length > 0 && CHAIN_ID && Cryptopunks.PunkState.currentChainId !== CHAIN_ID && web3.eth.defaultAccount) {
        Cryptopunks.showChainErrorModal();
        Cryptopunks.disconnect();
    }
}

Cryptopunks.connectMetamask = async () => {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
            Cryptopunks.closeChainErrorModal();
            await Cryptopunks.updateProvider(window.ethereum);
        }
    } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        Cryptopunks.disconnect();
      }
}

// Wallect Connect handles the disconnect event by itself so we don't call Cryptopunks.disconnect() like in the case of MetaMask
Cryptopunks.connectWalletConnect = async () => {
    const walletConnectModal = Cryptopunks.web3Modal;
    await walletConnectModal.connect();
    Cryptopunks.closeChainErrorModal();
    await Cryptopunks.updateProvider(walletConnectModal);
}

Cryptopunks.displayWalletPanel = () => {
    const walletModal = document.getElementById('ethereum')
    if (walletModal){
        walletModal.style.display = 'block';
    }
}

Cryptopunks.loadPunkData = function(index) {
	console.log("In show punk actions.");
	Cryptopunks.currentPunkIndex = index;
	Cryptopunks.PunkState.punkData.punkIndex = index;
	// var index = Cryptopunks.currentPunkIndex;
	var address = Cryptopunks.PunkState.account;
	console.log("Local address='" + address + "'");
	Cryptopunks.punkContract.methods.punkIndexToAddress(index).call()
    .then(async (result) => {
			console.log("Owner: '" + result + "'");
            Cryptopunks.PunkState.punkData.owner = result;
			if (address == result) {
				console.log(" - Is owner!");
				Cryptopunks.PunkState.isOwner = true;
			} else {
                Cryptopunks.PunkState.isOwner = false;
				console.log(" - Is not owner.");
			}

			// Punk tokens owned by wrapper Contracts should be queried for ERC-721 ownership
			if (result?.toLowerCase() === ADDRESS_CRYPTOPUNKS_WRAPPED_CONTRACT.toLowerCase()) {
                Cryptopunks.PunkState.isWrapped = true;
                Cryptopunks.PunkState.isLegacyWrapped = false;
			    const owner = await getWrappedOwner(ADDRESS_CRYPTOPUNKS_WRAPPED_CONTRACT, index);
                Cryptopunks.PunkState.isOwner = owner?.toLowerCase() === address.toLowerCase();
                console.log(` - Wrapped owner:`, owner);
                console.log(` - Is wrapped owner:`, Cryptopunks.PunkState.isOwner);
                Cryptopunks.PunkState.punkData.owner = owner;
			} else if (result?.toLowerCase() === ADDRESS_LEGACY_WRAPPED_PUNKS_CONTRACT.toLowerCase()) {
			    Cryptopunks.PunkState.isWrapped = false;
                Cryptopunks.PunkState.isLegacyWrapped = true;
			    const owner = await getWrappedOwner(ADDRESS_LEGACY_WRAPPED_PUNKS_CONTRACT, index);
			    Cryptopunks.PunkState.isOwner = owner?.toLowerCase() === address.toLowerCase();
                console.log(` - Wrapped owner:`, owner);
                console.log(` - Is legacy wrapped owner:`, Cryptopunks.PunkState.isOwner);
                Cryptopunks.PunkState.punkData.owner = owner;
			} else {
			    Cryptopunks.PunkState.isWrapped = Cryptopunks.PunkState.isLegacyWrapped = false;
			}

            Cryptopunks.PunkState.loadingDone.owner = true;
	})
    .catch((error) => {
			console.log(error);
	});

    Cryptopunks.punkContract.methods.punksOfferedForSale(index).call()
    .then((result) => {
            Cryptopunks.PunkState.forSale = result[0];
            if (result[0]) {
                Cryptopunks.PunkState.punkData.offerValue = result[3];
                Cryptopunks.PunkState.punkData.onlySellTo = result[4];
                console.log("Punk for sale for " + Cryptopunks.PunkState.punkData.offerValue + " to " + Cryptopunks.PunkState.punkData.onlySellTo);
            }
            if (Cryptopunks.NULL_ADDRESS == result[4] || result[4] == address) {
                Cryptopunks.PunkState.canBuy = true;
            } else {
                Cryptopunks.PunkState.canBuy = false;
            }
            console.log(result);

            Cryptopunks.PunkState.loadingDone.offer = true;
        })
    .catch((error) => {
            console.log(error);
    });

    Cryptopunks.punkContract.methods.punkBids(index).call()
    .then((result) => {
            Cryptopunks.PunkState.hasBid = result[0];
            if (Cryptopunks.PunkState.hasBid) {
                Cryptopunks.PunkState.punkData.bidder = result[2];
                Cryptopunks.PunkState.punkData.bidValue = result[3];
                Cryptopunks.PunkState.ownsBid = result[2].toLowerCase() === address?.toLowerCase();
            } else {
                Cryptopunks.PunkState.ownsBid = false;
            }
            console.log(result);
            Cryptopunks.PunkState.loadingDone.bid = true;
        })
    .catch ((error) => {
        console.log(error);
    });
};

Cryptopunks.refreshPendingWidthdrawals = function() {
    Cryptopunks.punkContract.methods.pendingWithdrawals(Cryptopunks.PunkState.account).call()
    .then(result => {
            Cryptopunks.PunkState.accountBalanceInWei = result;
            Cryptopunks.PunkState.accountBalanceInEther = Number(web3.utils.fromWei(result, 'ether'));
            if (!web3.utils.toBN(result).isZero()) {
                Cryptopunks.PunkState.accountHasBalance = true;
            } else {
                Cryptopunks.PunkState.accountHasBalance = false;
            }
            console.log("Pending balance: " + result);
            Cryptopunks.displayWalletPanel();
        })
    .catch(error => {
            console.log(error);
            Cryptopunks.checkValidChainId();
        });
};

Cryptopunks.restoreTransactions = function() {
	var storedData = localStorage.getItem(Cryptopunks.TX_HASHES);
	var items = [];
	if (storedData) {
		items = JSON.parse(storedData);
	}
    console.log("Restored transactions from local storage, length: "+items.length);
	Cryptopunks.PunkState.transactions = items;

	// Clear content
/*
	for (i = 0; i < items.length; i++) {
		var item = items[i];
		Cryptopunks.showTransaction(item);
	}
*/
};

Cryptopunks.showTransaction = function(transaction) {
	var div = $(Cryptopunks.TX_DIV_ID);
	if (transaction.failed) {
		div.append('<p id="' + transaction.hash + '">' + transaction.name + ' <i>failed</i>.</p>');
	} else {
		div.append('<p id="' + transaction.hash + '"><a href="https://etherscan.io/tx/' + transaction.hash + '">' + transaction.name + '</a> <i>pending</i>.</p>');
	}

};

Cryptopunks.trackTransaction = function(name, index, hash) {
    console.log('trackTransaction hash', hash)
	var storedData = localStorage.getItem(Cryptopunks.TX_HASHES);
	var hashes = [];
	if (storedData) {
		hashes = JSON.parse(storedData);
	}
	var transaction = {
		'name' : name,
		'hash' : hash.transactionHash,
		'index' : index,
		'pending' : true
	};
	hashes.push(transaction);
	localStorage.setItem(Cryptopunks.TX_HASHES, JSON.stringify(hashes));
	Cryptopunks.PunkState.transactions = hashes;
	// Cryptopunks.showTransaction(transaction);
};

Cryptopunks.showFailure = function(name, index) {
	var transaction = {
		'name' : name,
		'hash' : '0x0',
		'index' : index,
		'pending' : false,
		'failed' : true
	};
    Cryptopunks.PunkState.transactions.push(transaction);
	// Cryptopunks.showTransaction(transaction);
};

Cryptopunks.checkTransactions = function() {
	// console.log("Checking transactions...");
	var storedData = localStorage.getItem(Cryptopunks.TX_HASHES);
	var items = [];
	if (storedData) {
		items = JSON.parse(storedData);
	}
	Cryptopunks.PunkState.transactions = items;
	// Clear content
	for (i = 0; i < items.length; i++) {
		var item = items[i];
		if (item.pending) {
			web3.eth.getTransaction(item.hash)
            .then((result) => {
                if (result) {
                    // console.log(result);
                    if (result.blockNumber) {
                        // Completed.
                        // $('#' + item.hash + ' i').text("completed");
                        item.pending = false;
                        if (item.index >= 0) {
                            console.log("Reloading pending withdrawals...");
                            Cryptopunks.refreshPendingWidthdrawals();
                            if (Cryptopunks.currentPunkIndex == item.index) {
                                console.log("Reloading punk data...");
                                Cryptopunks.loadPunkData(Cryptopunks.currentPunkIndex);
                            }
                        }
                        localStorage.setItem(Cryptopunks.TX_HASHES, JSON.stringify(items));
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                console.log("Failure.");
            });
		} else {
			// items.splice(i, 1);
			// i--;
		}
	}
	localStorage.setItem(Cryptopunks.TX_HASHES, JSON.stringify(items));
};

Cryptopunks.testAjax = function() {
	console.log("About to reload.");
	$.ajax({

		url : "/cryptopunks/reloadpunk?punkIndex=" + 2000 + "&sinceBlockNum=" + 4009295,
		type : 'GET',
		data : {
		},
		dataType:'text',
		success : function(data) {
			console.log("Reloaded.");
			location.reload(true);
		},
		error : function(request,error)
		{
			console.log("Reload error.");
		}
	});

}

Cryptopunks.buyPunk = function(index, price) {
    Cryptopunks.punkContract.methods.buyPunk(index).send({from: web3.eth.defaultAccount, gas: 200000, value: price})
        .then((result) => {
                console.log(result);
                console.log("Success!");
                Cryptopunks.trackTransaction("Buy " + index, index, result);
        })
        .catch((error) => {
            console.log(error);
            console.log("Failure.");
        });
    
	return true;
};

Cryptopunks.offerPunkForSale = function(index, amount) {
	console.log("Offering to sale to anyone");
	if (!amount || amount == 0) {
	    return false;
    }
    //fix this one
    Cryptopunks.punkContract.methods.offerPunkForSale(index, amount).send({from: web3.eth.defaultAccount, gas: 200000})
        .then((result) => {
            console.log(result);
            console.log("Success!");
			Cryptopunks.trackTransaction("Offer " + index, index, result);
        })
        .catch((error) => {
            console.log(error);
            console.log("Failure.");
			Cryptopunks.showFailure("Offer " + index, index);
        });

	return true;
};

Cryptopunks.offerPunkForSaleToAddress = function(index, amount, address) {
    if (!amount || amount == 0) {
        return false;
    }
	if (address) {
		console.log("Offering to sale to address '" + address + "'");
		Cryptopunks.punkContract.methods.offerPunkForSaleToAddress(index, amount, address).send({
			from: web3.eth.defaultAccount, gas: 200000})
            .then((result) => {
                console.log(result);
                console.log("Success!");
                Cryptopunks.trackTransaction("Offer " + index, index, result);
            })
            .catch((error) => {
                console.log(error);
                console.log("Failure.");
                Cryptopunks.showFailure("Offer " + index, index);
            });
	} else {
		Cryptopunks.offerPunkForSale(index, amount);
	}
	return true;
};

Cryptopunks.punkNoLongerForSale = function(index) {
    Cryptopunks.punkContract.methods.punkNoLongerForSale(index).send({from: web3.eth.defaultAccount, gas: 200000})
        .then((result) => {
            console.log(result);
            console.log("Success!");
			Cryptopunks.trackTransaction("Remove Offer for " + index, index, result);
        })
        .catch((error) => {
            console.log(error);
            console.log("Failure.");
			Cryptopunks.showFailure("Remove Offer for " + index, index);
        });
	return true;
};

Cryptopunks.transferPunk = function(index, address) { 
    if (!address || !address.startsWith("0x") || !web3.utils.isAddress(address) || isZeroAddress(address)) {
        return false;
    }
    Cryptopunks.punkContract.methods.transferPunk(address, index).send({from: web3.eth.defaultAccount, gas: 200000})
        .then((result) => {
            console.log(result);
            console.log("Success!");
			Cryptopunks.trackTransaction("Transfer " + index, index, result);
        })
        .catch((error) => {
            console.log(error);
            console.log("Failure.");
			Cryptopunks.showFailure("Transfer " + index, index);
        });

	return true;
};

Cryptopunks.enterBidForPunk = function(index, amount) {
    try {
        // todo - do data validation: do they own the punk, is the bid amount enough to beat an existing bid, etc.
        Cryptopunks.punkContract.methods.enterBidForPunk(index).send({from: web3.eth.defaultAccount, gas: 200000, value: amount})
        .then((result) => {
            console.log(result);
            console.log("Success!");
            Cryptopunks.trackTransaction("Bid on " + index, index, result);
        })
        .catch((error) => {
            console.log(error);
            console.log("Failure.");
            Cryptopunks.showFailure("Bid on " + index, index);
        });
    } catch (error) {
        console.log(error);
    }
    return true;
};

Cryptopunks.acceptBidForPunk = function(index, amount) {
    if (web3.utils.toBN(amount).isZero()) {
        console.log("Error: Amount too low for accept bid.");
        return false;
    }
    console.log("Accepting bid for " + index + " for " + amount);
    Cryptopunks.punkContract.methods.acceptBidForPunk(index, amount.toString()).send({from: web3.eth.defaultAccount, gas: 200000})
        .then((result) => {
            console.log(result);
            console.log("Success!");
			Cryptopunks.trackTransaction("Accept bid for " + index, index, result);
        })
        .catch((error) => {
            console.log(error);
            console.log("Failure.");
			Cryptopunks.showFailure("Accept bid for " + index, index);
        });
        
	return true;
};

Cryptopunks.withdrawBidForPunk = function(index) {
    Cryptopunks.punkContract.methods.withdrawBidForPunk(index).send({from: web3.eth.defaultAccount, gas: 200000})
    .then((result) => {
            console.log(result);
            console.log("Success!");
			Cryptopunks.trackTransaction("Withdraw bid on " + index, index, result);
        }) 
    .catch((error) => {
            console.log(error);
            console.log("Failure.");
			Cryptopunks.showFailure("Withdraw bid on " + index, index);
        });
	return true;
};

Cryptopunks.withdraw = function() {
    Cryptopunks.punkContract.methods.withdraw().send({from: web3.eth.defaultAccount, gas: 200000})
        .then((result) => {
                console.log(result);
                console.log("Success!");
                Cryptopunks.trackTransaction("Withdraw ETH", -1, result);
                console.log("Cryptopunks.refreshPendingWidthdrawals()")
                Cryptopunks.refreshPendingWidthdrawals();
        })
        .catch((error) => {
            console.log(error);
            console.log("Failure.");
            Cryptopunks.showFailure("Withdraw ETH", -1);
        });
    
	return true;
};

Cryptopunks.createTestTransaction = function () {
    Cryptopunks.trackTransaction("Withdraw ETH", -1, "0x62d2e282e26ab1ade314d06a2b835ba227a78d75cf3ca5de77ed15843d05aafa");
}

Cryptopunks.signMessage = function(msg) {
    signMsgPersonal(msg, Cryptopunks.PunkState.account);
    // signMsg(msgParams, Cryptopunks.PunkState.account);
}

function signMsgPersonal(msg, from) {
    web3.currentProvider.request({
        method: 'personal_sign',
        params: [msg, from],
        from: from,
    })
    .then(result => {
        const signedMessage = result;
        console.log("Signed message: " + signedMessage);
        window.location.href = "/cryptopunks/verifySignature?signedMessage="+signedMessage+"&origMessage="+msg;
    })
    .catch(error => {
        console.error('error signing message:');
        console.error(error);
    });
}

function signMsgTyped(msgParams, from) {
    web3.currentProvider.sendAsync({
        method: 'eth_signTypedData',
        params: [msgParams, from],
        from: from,
    }, function (err, result) {
        if (err) return console.error(err)
        if (result.error) {
            return console.error(result.error.message)
        }
        console.log("Signed message: "+result.result);
        window.location.href = "/cryptopunks/verifySignature?signedMessage="+result.result+"&origMessage="+JSON.stringify(msgParams);
    })
}

function isZeroAddress(address) {
    return address === "0x0000000000000000000000000000000000000000";
}


async function getWrappedOwner (contractAddress, tokenId) {
    const contract = new web3.eth.Contract(Erc721ABI, contractAddress);
    try {
        const owner = await contract.methods.ownerOf(tokenId).call();
        return owner;
    } catch (err) {
        console.warn(`Error checking wrapped ownership of token ${tokenId} in ${contractAddress}`, err);
    }
}