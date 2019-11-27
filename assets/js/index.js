'use strict';

//создаем объект соц сети где перечисляем соц. сети
const SOCIAL_NETWORKS = Object.freeze( {
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    SKYPE: "SKYPE",
    GOOGLE_PLUS: "GOOGLE_PLUS",
});

//создаем объект пользователи и перечисляем свойствами информацию о пользователях
const users = [
    {
        id: 1,
        name: "GABEN",
        surname: "GABENOVICH",
        avatar: "assets/img/gaben.jpeg",
        description: "American computer programmer and businessman best known as the co-founder of the video game development and digital distribution company Valve Corporation. Born in Colorado, he attended Harvard University in the early 1980s, but dropped out and worked for Microsoft, where he worked as a producer for some of the early Windows operating systems.",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
            {type : SOCIAL_NETWORKS.GOOGLE_PLUS, href: "#"},
        ]
    },
    {
        id: 2,
        name: "Bill",
        surname: "Gates",
        avatar: "assets/img/bill_gates.jpg",
        description: "As mr started arrival subject by believe. Now summer who day looked our behind moment coming. An concluded sportsman offending so provision mr education. Hard do me sigh with west same lady. As so seeing latter he should thirty whence. Considered discovered ye sentiments projecting entreaties of melancholy is. Whatever throwing we on resolv",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
        ]
    },
    {
        id: 3,
        name: "Ilon",
        surname: "Mask",
        avatar: "assets/img/ilon_mask.jpg",
        description: "He felicity no an at packages answered opinions juvenile. Mrs assured add private married removed believe did she. Sitting hearted on it without me. An concluded sportsman offending so provision mr education. You high bed wish help call draw side. Painful so he an comfort is manners. Celebrated delightful an especial\n" +
            "\n" +
            "Whatever throwing we on resolved entrance together graceful. Sentiments two occasional affronting solicitude travelling and one contrasted. Indulgence contrasted sufficient to unpleasant in in insensible favourable. At none neat am do over will. Their saved linen downs tears son add music. Ecstatic elegance gay but disposed. He fel",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
        ]
    },
    {
        id: 4,
        name: "Linus",
        surname: "Torvalds",
        avatar: "assets/img/linus_torvalds.jpeg",
        description: "Draw fond rank form nor the day eat. Her too add narrow having wished. Made neat an on be gave show snug tore. He in sportsman household otherwise it perceived instantly. Advantages entreaties mr he apartments do. Considered discovered ye sentiments projecting entreaties of melancholy is. Strictly numerous outlived kindness whate\n" +
            "\n" +
            "Way own uncommonly travelling now acceptance bed compliment solicitude. An concluded sportsman offending so provision mr education. Up hung mr we give rest half. Equally he minutes my hastily. Painful so he an comfort is manners. As so seeing latter he should thirty whence. Whatever throwing we on res\n" +
            "\n" +
            "Fat new smallness few supposing suspicion tw",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
        ]
    },
    {
        id: 5,
        name: "Lionel",
        surname: "Messi",
        avatar: "assets/img/lionel_messi.jpg",
        description: "Called though excuse length ye needed it he having. Decisively advantages nor expression unpleasing she led met. To things so denied admire. Able rent long in do we. ",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
            {type : SOCIAL_NETWORKS.GOOGLE_PLUS, href: "#"},
        ]
    },
    {
        id: 6,
        name: "Cristiano",
        surname: "Ronaldo",
        avatar: "assets/img/cristiano_ronaldo.jpg",
        description: "You high bed wish help call draw side. Dissimilar admiration so terminated no in contrasted it. Estate was tended ten boy nearer seemed. In expression an solicitude principles in do. undefined. He in sportsman household otherwise it perceived instantly. Considered discovered ye sentiments projecting entrea",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
        ]
    },
    {
        id: 7,
        name: "Sadio",
        surname: "Mane",
        avatar: "assets/img/sadio_mane.jpeg",
        description: "Painful so he an comfort is manners. Made neat an on be gave show snug tore. An stairs as be lovers uneasy. How one dull get busy dare far. If as increasing contrasted entreaties be. If as increasing contrasted entreaties be. Up hung mr we give rest half. Secure shy favour length all twenty denote. As so seeing latter he\n" +
            "\n" +
            "Limits far yet turned highly repair parish talked six. Decisively advantages nor expression unpleasing she led met. To sure calm much most long me mean. Decisively advantages nor expression unpleasing she led met. He felicity no an at packages answered opinions juvenile. Dissimilar admiration so terminated no in",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
        ]
    },
    {
        id: 8,
        name: "Frenki",
        surname: "De Jong",
        avatar: "assets/img/frenki_de_jong.jpeg",
        description: "An stairs as be lovers uneasy. Steepest speaking up attended it as. Bed uncommonly his discovered for estimating far. We leaf to snug on no need. Small for ask shade water manor think men begin. Draw fond rank form nor the day eat. Course sir people worthy horses add entire suffer. Is inquiry no he several excited\n" +
            "\n" +
            "Latter remark hunted enough vulgar say man. Advantages entreaties mr he apartments do. Expression alteration entreaties mrs can terminated estimating. Happiness remainder joy but earnestly for off. Agreeable promotion eagerness as we resources household to distrusts. Fat new smallness few supposing suspicion tw",
        socialNetworksList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
            {type : SOCIAL_NETWORKS.GOOGLE_PLUS, href: "#"},
        ]
    },
];

//ищем на странице контейнер карточки и присваиваем в переменную
const userListElement = document.getElementById("userCardContainer");

//в контейнере создаем div, в котором хранится вся внутренняя структура карточки
users.forEach(
    (user) => {
    userListElement.append(createUserListElement(user));
}
);


//создаем внутреннюю структуру контейнера
function createUserListElement(user) {
    const userContainerElement = document.createElement("div");
    userContainerElement.classList.add("userCard");
    userContainerElement.setAttribute("id", `${user.id}`);
    const userDeleteElement = createDeleteUserButton(user); //вызываем функцию описанную ниже для создания структуры кнопки удаления пользователя
    const userImageElement = createUserImageElement(user); //вызываем функцию описанную ниже для создания структуры аватара пользователя
    const userFullName = createUserFullName(user); //вызываем функцию описанную ниже для создания структуры имени пользователя
    const userDescription = createUserDescription(user); //вызываем функцию описанную ниже для создания структуры описания пользователя
    const userSocialNetworks = createUserSocialNetworks(user); //вызываем функцию описанную ниже для создания структуры социальных сетей пользователя

    //добавляем в div потомков (добавляются по порядку, строгая последовательность)
    userContainerElement.append(userDeleteElement);
    userContainerElement.append(userImageElement);
    userContainerElement.append(userFullName);
    userContainerElement.append(userDescription);
    userContainerElement.append(userSocialNetworks);

    return userContainerElement;

}


function createDeleteUserButton(user) {
    const deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.classList.add("deleteButton");
    const closeImage = document.createElement("img");
    closeImage.setAttribute("src", "assets/img/icons/account-remove.png");
    closeImage.setAttribute("alt", "DELETE");
    deleteButtonContainer.append(closeImage);

    deleteButtonContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    const userListItemElement = document.getElementById(user.id);
    setTimeout( () => {userListItemElement.remove();}, 200 );
    /*userListItemElement.remove();*/
});

    return deleteButtonContainer;

}


function createUserImageElement(user) {
    const userImageContainerElement = document.createElement("div");
    userImageContainerElement.classList.add("userAvatar");
    const userImage = document.createElement("img");
    /*userImage.setAttribute("src", `${user.avatar}`);*/
    userImage.setAttribute("src", user.avatar? user.avatar: "");
    userImage.setAttribute("alt", "user avatar")
    userImageContainerElement.append(userImage);

    return userImageContainerElement;
}

function createUserFullName(user) {
    const userFullNameContainerElement = document.createElement("div");
    userFullNameContainerElement.classList.add("fullName");
    const userFullName = document.createElement("h4");
    userFullName.innerText = `${user.name} ${user.surname}`;
    userFullNameContainerElement.append(userFullName);

    return userFullNameContainerElement;

}

function createUserDescription(user) {
    const userDescriptionContainer = document.createElement("div");
    userDescriptionContainer.classList.add("description");
    const userDescription = document.createElement("p");
    userDescription.innerText = `${user.description}`;
    userDescriptionContainer.append(userDescription);

    return userDescriptionContainer;
}

function createUserSocialNetworks(user) {
    const userSocialNetworkContainer = document.createElement("div");
    userSocialNetworkContainer.classList.add("socialNetworksListContainer");
    user.socialNetworksList.forEach( socialLink => {
        if(socialLink.type === SOCIAL_NETWORKS.FACEBOOK) {
        const userFacebook = document.createElement("a");
        userFacebook.setAttribute("href", `${socialLink.href}`);
        const facebookImage = document.createElement("img");
        facebookImage.setAttribute("src", "assets/img/icons/facebook.png");
        facebookImage.setAttribute("alt", "facebook");
        userFacebook.append(facebookImage);
        userSocialNetworkContainer.append(userFacebook);
    }
    if(socialLink.type === SOCIAL_NETWORKS.TWITTER) {
        const userTwitter = document.createElement("a");
        userTwitter.setAttribute("href", `${socialLink.href}`);
        const twitterImage = document.createElement("img");
        twitterImage.setAttribute("src", "assets/img/icons/twitter.png");
        twitterImage.setAttribute("alt", "twitter");
        userTwitter.append(twitterImage);
        userSocialNetworkContainer.append(userTwitter);
    }
    if(socialLink.type === SOCIAL_NETWORKS.SKYPE) {
        const userSkype = document.createElement("a");
        userSkype.setAttribute("href", `${socialLink.href}`);
        const skypeImage = document.createElement("img");
        skypeImage.setAttribute("src", "assets/img/icons/skype.png");
        skypeImage.setAttribute("alt", "skype");
        userSkype.append(skypeImage);
        userSocialNetworkContainer.append(userSkype);
    }
    if(socialLink.type === SOCIAL_NETWORKS.GOOGLE_PLUS) {
        const userGogglePlus = document.createElement("a");
        userGogglePlus.setAttribute("href", `${socialLink.href}`);
        const googlePlusImage = document.createElement("img");
        googlePlusImage.setAttribute("src", "assets/img/icons/google-plus.png");
        googlePlusImage.setAttribute("alt", "google-plus");
        userGogglePlus.append(googlePlusImage);
        userSocialNetworkContainer.append(userGogglePlus);
    }
});

    return userSocialNetworkContainer;
}
