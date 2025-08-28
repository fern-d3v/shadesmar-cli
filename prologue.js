export default {
    text: 'You drift back to consciousness, your mind struggling to process the alien landscape around you. Gone are the familiar sights of home. You see a faint light in the distance, flickering like a candle. Behind you, a forest of crystal trees stretches into the darkness.',
    choices: [
        { label: 'Investigate the light', next: 'light' },
        { label: 'Turn back into the forest', next: 'forest' }
    ],
    nextScenes: {
        light: {
            text: 'Upon arriving at the light, you find small, white glowing flames floating above the surface of an ocean of beads.',
            choices: [
                { label: 'Reach out to touch a flame', next: 'flame' },
                { label: 'Collect some beads', next: 'beads' }
            ],
            nextScenes: {
                flame: {
                    text: 'As you reach out to touch a flame, you sense the lifeforce of another being. Someone from your realm, though you cannot discern who this strange flame belongs to. But you feel a strange sense of pull towards it.',
                    choices: [
                        { label: 'Connect with the flame', next: 'connectFlame' },
                        { label: 'Ignore it and collect beads', next: 'beads' }
                    ],
                    nextScenes: {
                        connectFlame: {
                            text: 'You cannot connect with the flame, something like this is beyond your understanding.',
                            choices: [
                                { label: 'Ignore it and collect beads', next: 'beads' }
                            ]
                        }
                    }
                },
                beads: {
                    text: 'You collect some beads and feel their strange warmth.',
                    choices: [
                        { label: 'Examine the bead', next: 'examineBeads' },
                        { label: 'Throw it into the ocean', next: 'throwBeads' }
                    ],
                    nextScenes: {
                        examineBeads: {
                            text: 'As you examine the bead, you notice it is warm to the touch and seems to pulse with a faint light. It feels alive, almost as if it is a small vessel of energy.',
                            choices: [
                                { label: 'You decide to keep the bead.', next: 'keepBeads' },
                                { label: 'You throw the bead into the ocean.', next: 'throwBeads' }
                            ]
                        },
                        keepBeads: {
                            text: 'You tuck the bead away, its warmth settling against your palm. You feel oddly protected, but also drawn to move on.',
                            choices: [
                                { label: 'Leave the shore and explore the forest.', next: 'forest' }
                            ]
                        },
                        throwBeads: {
                            text: 'You throw the bead into the ocean, and it sinks slowly, disappearing into the depths. You feel a strange sense of loss, as if you have let go of something important.',
                            choices: [
                                { label: 'You decide to leave the ocean behind and explore the forest.', next: 'forest' }
                            ]
                        }
                    }
                }
            }
        },
        forest: {
            text: 'You venture back into the crystal forest, the trees humming softly. Suddenly, a group of figures emerge from the shadows! They seem to be humanoids with shifting, rotating pattern of geometric shapes—circles within polygons within spirals, all rotating at different speeds and in different directions where their head should be. They don\'t seem hostile, more curious than anything.',
            choices: [
                { label: 'Approach the figures', next: 'approachFigures' },
                { label: 'Hide behind a tree', next: 'hideTree' }
            ],
            nextScenes: {
                approachFigures: {
                    text: 'As you approach the figures, they turn to you, their geometric patterns shifting and swirling. One of them steps forward, its voice a harmonious blend of tones.',
                    choices: [
                        { label: 'Ask about the forest', next: 'askForest' },
                        { label: 'Inquire about the light', next: 'askLight' }
                    ]
                },
                askForest: {
                    text: 'The figure responds, its patterns shifting and swirling faster. "This is shadesmar, the realm of thought, not the realm of physicality, you are a long way from home little lie," it says.',
                    choices: [
                        { label: 'What are you?!', next: 'askFigures' },
                        { label: 'What is shadesmar?', next: 'askShadesmar' }
                    ],
                    nextScenes: {
                        askFigures: {
                            text: 'You ask the figure what it is. "We are cryptic spren, though in your realm, you would never notice us, here in Shadesmar, we appear as we are. Such a curious little lie you are. Hmmmmmm, I wonder if you could be the one we were sent to find."',
                            choices: [
                                { label: 'Ask what it means they were sent to find you', next: 'askSentToFind' },
                                { label: 'What is Shadesmar?', next: 'askShadesmar' }
                            ],
                            nextScenes: {
                                askSentToFind: {
                                    text: 'The figure responds, its patterns swirling in a complex dance. "We were sent to find a truth, a little lie that holds the key to helping us pass to the physical realm."',
                                    choices: [
                                        { label: 'Ask how you hold the key', next: 'askKey' }
                                    ],
                                    nextScenes: {
                                        askKey: {
                                            text: '"Ahhh yes! Such curiosity! Such joyous lies! You may hold the key, the key is you. Mmmmm, yes, truths, lies, so delicious. You, little lie, are alive, that means you can help us. But the way is not simple. There are bonds, hidden and waiting, threads that connect thought and soul. Only those who see beyond what is, and speak truths, can shape the world here."',
                                            choices: [
                                                { label: 'Ask what it means to see beyond', next: 'askSeeBeyond' }
                                            ],
                                            nextScenes: {
                                                askSeeBeyond: {
                                                    text: '"To see beyond is to understand the nature of things, to speak truths that shape reality. In this place, words have power, and meaning is the bridge. Seek what is hidden, question what is known. Only then may the path reveal itself."',
                                                    choices: [
                                                        { label: 'Ask how does one see beyond', next: 'askHowToSeeBeyond' }
                                                    ],
                                                    nextScenes: {
                                                        askHowToSeeBeyond: {
                                                            text: 'The figure\'s patterns swirl in contemplation. "To see beyond, one must first understand oneself. Reflect on your own nature, your own truths and lies. Only then can you begin to perceive the deeper layers of reality here in Shadesmar."',
                                                            choices: [
                                                                { label: 'Ask for guidance on self-reflection', next: 'askSelfReflection' }
                                                            ],
                                                            nextScenes: {
                                                                askSelfReflection: {
                                                                    text: '"To reflect on oneself is to dive deep into the ocean of your own mind. It requires courage to face the truths hidden within. Ask yourself: What are my desires? What fears hold me back? Only by confronting these can you begin to understand your place in the tapestry of reality. Only then, can you hope to see beyond."',
                                                                    choices: [
                                                                        { label: 'What is Shadesmar?', next: 'askShadesmar' }
                                                                    ]
                                                                }
                                                            }
                                                        }
                                                    },
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        askShadesmar: {
                            text: 'You ask the figure about shadesmar. "Ah, shadesmar is a realm of thought and memory, a place where the minds of all living things connect. It is both beautiful and dangerous, a reflection of the physical world but not bound by its laws."',
                            choices: [
                                { label: 'How did I get here?', next: 'askHowIGotHere' }
                            ]
                        }
                    }
                },
                askLight: {
                    text: 'The figure tilts its head, the patterns swirling in contemplation. "The light? mmmmmmm... Oh, yes! The souls of little lies like yourself. They represent those in the physical realm."',
                    choices: [
                        { label: 'Why are they over that weird ocean?', next: 'askOcean' },
            { label: 'Ask about the forest', next: 'askForest'}
                    ],
                    nextScenes: {
                        askOcean: {
                            text: 'Hmmmm, not an ocean on your side. Land on your side. In Shadesmar, the land and water are reversed. The flames represent the souls of other lies on your side and the beads are the souls of all items.',
                            choices: [
                { label: 'What is this place?', next: 'askForest'}
                            ]
                        }
                    },
                },
                askHelp: {
                    text: 'The figures exchange glances, their patterns flickering. "Help is not given, it is discovered. In Shadesmar, answers are earned. Seek, question, and perhaps you will find what you need."',
                    choices: [
                        { label: 'What are you?', next: 'askFigures' }
                    ]
                },
                askHowIGotHere: {
                    text: 'You try to remember how you came to this place. Memories are hazy; you recall a sensation of falling through light and sound, then waking here. You fumble your pockets and try to make sense of the present moment.',
                    choices: [
                        { label: 'Search your pockets', next: 'searchPockets' },
                    ]
                },
                searchPockets: {
                    text: 'You find a small, metal carved token, an unfamiliar symbol etched into it. It hums faintly against your palm.',
                    choices: [
                        { label: 'Grip the token tight and offer to help the Cryptics', next: 'helpCryptics' },
                        { label: 'Pocket the token and turn your back on them', next: 'turnYourBack' }
                    ],
                    nextScenes: {
                        helpCryptics: {
                            text: 'You decide to help the Cryptics. As you approach, they regard you with a mixture of curiosity and caution. "You wish to assist us?" one asks, its patterns shifting in intrigue. "Then come little lie, let us find our path together through this realm."',
                            choices: []
                        },
                        turnYourBack: {
                            text: 'You pocket the token and turn away. The Cryptics watch you go, their patterns dimming. The forest beckons once more.',
                            choices: []
                        }
                    }
                },
                hideTree: {
                    text: 'You hide behind a tree, watching the figures with bated breath. They seem to be communicating with each other, their patterns shifting in response to their conversation.',
                    choices: [
                        { label: 'Eavesdrop on their conversation', next: 'eavesdrop' },
                        { label: 'Make your presence known', next: 'makePresenceKnown' }
                    ],
                    nextScenes: {
                        eavesdrop: {
                            text: "You strain to hear the figures' conversation, but their words are a confusing mix of tones and patterns. You catch snippets about \"the key\" and \"the little lie,\" but the meaning eludes you.",
                            choices: [
                                { label: 'Approach the figures', next: 'approachFigures' },
                                { label: 'Continue eavesdropping', next: 'eavesdrop' }
                            ]
                        },
                        makePresenceKnown: {
                            text: 'You step out from behind the tree, revealing yourself to the figures. They turn to you, their patterns shifting in surprise.',
                            choices: [
                                { label: 'Ask about the forest', next: 'askForest' },
                                { label: 'Inquire about the light', next: 'askLight' }
                            ]
                        }
                    }
                }
            }
        }
    }
};