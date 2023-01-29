import React from 'react';
import { CardType } from '../types';
import ClubsAce from '../assets/clubs/ClubsAce';
import Clubs2 from '../assets/clubs/Clubs2';
import Clubs3 from '../assets/clubs/Clubs3';
import Clubs4 from '../assets/clubs/Clubs4';
import Clubs5 from '../assets/clubs/Clubs5';
import Clubs6 from '../assets/clubs/Clubs6';
import Clubs7 from '../assets/clubs/Clubs7';
import Clubs8 from '../assets/clubs/Clubs8';
import Clubs9 from '../assets/clubs/Clubs9';
import Clubs10 from '../assets/clubs/Clubs10';
import ClubsJack from '../assets/clubs/ClubsJack';
import ClubsQueen from '../assets/clubs/ClubsQueen';
import ClubsKing from '../assets/clubs/ClubsKing';
import DiamondsAce from '../assets/diamonds/DiamondsAce';
import Diamonds2 from '../assets/diamonds/Diamonds2';
import Diamonds3 from '../assets/diamonds/Diamonds3';
import Diamonds4 from '../assets/diamonds/Diamonds4';
import Diamonds5 from '../assets/diamonds/Diamonds5';
import Diamonds6 from '../assets/diamonds/Diamonds6';
import Diamonds7 from '../assets/diamonds/Diamonds7';
import Diamonds8 from '../assets/diamonds/Diamonds8';
import Diamonds9 from '../assets/diamonds/Diamonds9';
import Diamonds10 from '../assets/diamonds/Diamonds10';
import DiamondsJack from '../assets/diamonds/DiamondsJack';
import DiamondsQueen from '../assets/diamonds/DiamondsQueen';
import DiamondsKing from '../assets/diamonds/DiamondsKing';
import HeartsAce from '../assets/hearts/HeartsAce';
import Hearts2 from '../assets/hearts/Hearts2';
import Hearts3 from '../assets/hearts/Hearts3';
import Hearts4 from '../assets/hearts/Hearts4';
import Hearts5 from '../assets/hearts/Hearts5';
import Hearts6 from '../assets/hearts/Hearts6';
import Hearts7 from '../assets/hearts/Hearts7';
import Hearts8 from '../assets/hearts/Hearts8';
import Hearts9 from '../assets/hearts/Hearts9';
import Hearts10 from '../assets/hearts/Hearts10';
import HeartsJack from '../assets/hearts/HeartsJack';
import HeartsQueen from '../assets/hearts/HeartsQueen';
import HeartsKing from '../assets/hearts/HeartsKing';
import SpadesAce from '../assets/spades/SpadesAce';
import Spades2 from '../assets/spades/Spades2';
import Spades3 from '../assets/spades/Spades3';
import Spades4 from '../assets/spades/Spades4';
import Spades5 from '../assets/spades/Spades5';
import Spades6 from '../assets/spades/Spades6';
import Spades7 from '../assets/spades/Spades7';
import Spades8 from '../assets/spades/Spades8';
import Spades9 from '../assets/spades/Spades9';
import Spades10 from '../assets/spades/Spades10';
import SpadesJack from '../assets/spades/SpadesJack';
import SpadesKing from '../assets/spades/SpadesKing';
import SpadesQueen from '../assets/spades/SpadesQueen';

const deckArray: CardType[] = [
    // CLUBS ♣
    {
        value: 1,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsAce />,
        id: 'clubs-1',
        canBePutOn: ['hearts-2, diamonds-2'],
        canBePutOnHome: null,
    },
    {
        value: 2,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs2 />,
        id: 'clubs-2',
        canBePutOn: ['hearts-3, diamonds-3'],
        canBePutOnHome: 'clubs-1',
    },
    {
        value: 3,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs3 />,
        id: 'clubs-3',
        canBePutOn: ['hearts-4, diamonds-4'],
        canBePutOnHome: 'clubs-2',
    },
    {
        value: 4,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs4 />,
        id: 'clubs-4',
        canBePutOn: ['hearts-5, diamonds-5'],
        canBePutOnHome: 'clubs-3',
    },
    {
        value: 5,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs5 />,
        id: 'clubs-5',
        canBePutOn: ['hearts-6, diamonds-6'],
        canBePutOnHome: 'clubs-4',
    },
    {
        value: 6,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs6 />,
        id: 'clubs-6',
        canBePutOn: ['hearts-7, diamonds-7'],
        canBePutOnHome: 'clubs-5',
    },
    {
        value: 7,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs7 />,
        id: 'clubs-7',
        canBePutOn: ['hearts-8, diamonds-8'],
        canBePutOnHome: 'clubs-6',
    },
    {
        value: 8,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs8 />,
        id: 'clubs-8',
        canBePutOn: ['hearts-9, diamonds-9'],
        canBePutOnHome: 'clubs-7',
    },
    {
        value: 9,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs9 />,
        id: 'clubs-9',
        canBePutOn: ['hearts-10, diamonds-10'],
        canBePutOnHome: 'clubs-8',
    },
    {
        value: 10,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs10 />,
        id: 'clubs-10',
        canBePutOn: ['hearts-11, diamonds-11'],
        canBePutOnHome: 'clubs-9',
    },
    {
        value: 11,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsJack />,
        id: 'clubs-11',
        canBePutOn: ['hearts-12, diamonds-12'],
        canBePutOnHome: 'clubs-10',
    },
    {
        value: 12,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsQueen />,
        id: 'clubs-12',
        canBePutOn: ['hearts-13, diamonds-13'],
        canBePutOnHome: 'clubs-11',
    },
    {
        value: 13,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsKing />,
        id: 'clubs-13',
        canBePutOn: null,
        canBePutOnHome: 'clubs-12',
    },
    // DIAMONDS ♦
    {
        value: 1,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsAce />,
        id: 'diamonds-1',
        canBePutOn: ['clubs-2, spades-2'],
        canBePutOnHome: null,
    },
    {
        value: 2,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds2 />,
        id: 'diamonds-2',
        canBePutOn: ['clubs-3, spades-3'],
        canBePutOnHome: 'diamonds-1',
    },
    {
        value: 3,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds3 />,
        id: 'diamonds-3',
        canBePutOn: ['clubs-4, spades-4'],
        canBePutOnHome: 'diamonds-2',
    },
    {
        value: 4,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds4 />,
        id: 'diamonds-4',
        canBePutOn: ['clubs-5, spades-5'],
        canBePutOnHome: 'diamonds-3',
    },
    {
        value: 5,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds5 />,
        id: 'diamonds-5',
        canBePutOn: ['clubs-6, spades-6'],
        canBePutOnHome: 'diamonds-4',
    },
    {
        value: 6,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds6 />,
        id: 'diamonds-6',
        canBePutOn: ['clubs-7, spades-7'],
        canBePutOnHome: 'diamonds-5',
    },
    {
        value: 7,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds7 />,
        id: 'diamonds-7',
        canBePutOn: ['clubs-8, spades-8'],
        canBePutOnHome: 'diamonds-6',
    },
    {
        value: 8,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds8 />,
        id: 'diamonds-8',
        canBePutOn: ['clubs-9, spades-9'],
        canBePutOnHome: 'diamonds-7',
    },
    {
        value: 9,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds9 />,
        id: 'diamonds-9',
        canBePutOn: ['clubs-10, spades-10'],
        canBePutOnHome: 'diamonds-8',
    },
    {
        value: 10,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds10 />,
        id: 'diamonds-10',
        canBePutOn: ['clubs-11, spades-11'],
        canBePutOnHome: 'diamonds-9',
    },
    {
        value: 11,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsJack />,
        id: 'diamonds-11',
        canBePutOn: ['clubs-12, spades-12'],
        canBePutOnHome: 'diamonds-10',
    },
    {
        value: 12,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsQueen />,
        id: 'diamonds-12',
        canBePutOn: ['clubs-13, spades-13'],
        canBePutOnHome: 'diamonds-11',
    },
    {
        value: 13,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsKing />,
        id: 'diamonds-13',
        canBePutOn: null,
        canBePutOnHome: 'diamonds-12',
    },
    // HEARTS ♥
    {
        value: 1,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsAce />,
        id: 'hearts-1',
        canBePutOn: ['clubs-2, spades-2'],
        canBePutOnHome: null,
    },
    {
        value: 2,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts2 />,
        id: 'hearts-2',
        canBePutOn: ['clubs-3, spades-3'],
        canBePutOnHome: 'hearts-1',
    },
    {
        value: 3,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts3 />,
        id: 'hearts-3',
        canBePutOn: ['clubs-4, spades-4'],
        canBePutOnHome: 'hearts-2',
    },
    {
        value: 4,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts4 />,
        id: 'hearts-4',
        canBePutOn: ['clubs-5, spades-5'],
        canBePutOnHome: 'hearts-3',
    },
    {
        value: 5,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts5 />,
        id: 'hearts-5',
        canBePutOn: ['clubs-6, spades-6'],
        canBePutOnHome: 'hearts-4',
    },
    {
        value: 6,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts6 />,
        id: 'hearts-6',
        canBePutOn: ['clubs-7, spades-7'],
        canBePutOnHome: 'hearts-5',
    },
    {
        value: 7,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts7 />,
        id: 'hearts-7',
        canBePutOn: ['clubs-8, spades-8'],
        canBePutOnHome: 'hearts-6',
    },
    {
        value: 8,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts8 />,
        id: 'hearts-8',
        canBePutOn: ['clubs-9, spades-9'],
        canBePutOnHome: 'hearts-7',
    },
    {
        value: 9,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts9 />,
        id: 'hearts-9',
        canBePutOn: ['clubs-10, spades-10'],
        canBePutOnHome: 'hearts-8',
    },
    {
        value: 10,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts10 />,
        id: 'hearts-10',
        canBePutOn: ['clubs-11, spades-11'],
        canBePutOnHome: 'hearts-9',
    },
    {
        value: 11,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsJack />,
        id: 'hearts-11',
        canBePutOn: ['clubs-12, spades-12'],
        canBePutOnHome: 'hearts-10',
    },
    {
        value: 12,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsQueen />,
        id: 'hearts-12',
        canBePutOn: ['clubs-13, spades-13'],
        canBePutOnHome: 'hearts-11',
    },
    {
        value: 13,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsKing />,
        id: 'hearts-13',
        canBePutOn: null,
        canBePutOnHome: 'hearts-12',
    },
    // SPADES ♠
    {
        value: 1,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesAce />,
        id: 'spades-1',
        canBePutOn: ['hearts-2, diamonds-2'],
        canBePutOnHome: null,
    },
    {
        value: 2,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades2 />,
        id: 'spades-2',
        canBePutOn: ['hearts-3, diamonds-3'],
        canBePutOnHome: 'spades-1',
    },
    {
        value: 3,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades3 />,
        id: 'spades-3',
        canBePutOn: ['hearts-4, diamonds-4'],
        canBePutOnHome: 'spades-2',
    },
    {
        value: 4,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades4 />,
        id: 'spades-4',
        canBePutOn: ['hearts-5, diamonds-5'],
        canBePutOnHome: 'spades-3',
    },
    {
        value: 5,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades5 />,
        id: 'spades-5',
        canBePutOn: ['hearts-6, diamonds-6'],
        canBePutOnHome: 'spades-4',
    },
    {
        value: 6,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades6 />,
        id: 'spades-6',
        canBePutOn: ['hearts-7, diamonds-7'],
        canBePutOnHome: 'spades-5',
    },
    {
        value: 7,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades7 />,
        id: 'spades-7',
        canBePutOn: ['hearts-8, diamonds-8'],
        canBePutOnHome: 'spades-6',
    },
    {
        value: 8,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades8 />,
        id: 'spades-8',
        canBePutOn: ['hearts-9, diamonds-9'],
        canBePutOnHome: 'spades-7',
    },
    {
        value: 9,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades9 />,
        id: 'spades-9',
        canBePutOn: ['hearts-10, diamonds-10'],
        canBePutOnHome: 'spades-8',
    },
    {
        value: 10,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades10 />,
        id: 'spades-10',
        canBePutOn: ['hearts-11, diamonds-11'],
        canBePutOnHome: 'spades-9',
    },
    {
        value: 11,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesJack />,
        id: 'spades-11',
        canBePutOn: ['hearts-12, diamonds-12'],
        canBePutOnHome: 'spades-10',
    },
    {
        value: 12,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesQueen />,
        id: 'spades-12',
        canBePutOn: ['hearts-13, diamonds-13'],
        canBePutOnHome: 'spades-11',
    },
    {
        value: 13,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesKing />,
        id: 'spades-13',
        canBePutOn: null,
        canBePutOnHome: 'spades-12',
    },
];

export { deckArray };
