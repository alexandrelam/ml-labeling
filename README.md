 # WEB LABELING

> Auteur : Alexandre LAM

## Résumé

Le but de ce projet est de créer une application web permettant d'étiqueter des images/photos afin de les utiliser pour entraîner des modèles de machine learning.

Chaque personne qui souhaite utiliser l'application peut s'inscrire/se connecter. L'étiquetage d'image permet de gagner des points qui peuvent être échangé contre des cartes cadeau ou de l'argent directement. (Le système d'échange n'est implémenté). 

## Technologies utilisées

Le projet utilisera les technologies suivantes : 

- **Django** pour gérer le backend de l'application
- Création d'une **API RESTful** avec django REST framework
- **React** pour gérer le frontend de l'application

## Les buts

- Créer une api RESTful
- Permettre aux utilisateurs de s'inscrire et de se connecter
- Créer un système de points
- Dessiner un ou plusieurs rectangles sur une image pour l'étiqueter
- Pouvoir passer d'une image à une autre rapidement avec des boutons 
- Pouvoir signaler une photo si l'indication et l'image sont incompatibles

## Les non buts 

- L'application ne sera pas une application desktop
- Elle ne va pas permettre à l'utilisateur lambda d'ajouter des images

## Diagramme de l'architecture de l'application

![Diagramme technique](https://lh3.googleusercontent.com/s2PXkR6u9pm7ckDVEu62OzQlRXWxvLJd7v4vqFb6ESgA1S9sVBIPMvMxTh-mTPAxpp8wI_aYtvzlwoC2kUBlJ4-dc4kT0AValpz-Gb09Iabku_XygSEh8YbbgBpBLqXvc4CKZ2MF3ko=w463-h956-no)

## Progression

![Progression_1](https://lh3.googleusercontent.com/cTc1LM8TACUs8n_99qHdVcwx7yCgRoTIeHdWnn3hMGYR8qB8xw3JVOqHqRLuWLnAV0oke35zDUWrzwUbuR4_BxQkIG_hSUOcIDP4uxMT-kDj8O5AQY2i1w8PZGwrDRmFYm8527noB4uwXXiegExanYGZ-s8Dm4hxc2CJn_wJhJ-_qGhHEzHg6lCzRsEB623We7-vvMBC3du_letoDB-JJqBBDNKe4AMjbjDN5F1qQL1Y2-YSdLNt2wtHuQB9f19nKnEZNw3TR7DBunPcExNkcO2jVNxBpyvE1OeIb1tlb6fN-ZOaDk7eTMmV0-swjsKMaDty7ugEdTL_w_-bReRviPHEtYpCwJXwRZbsg6WL_nVhIvQ7VFeU46vsLHacN_0OpnYBK8eTzV8U_2u4_Dsmd6VQiBpzdixUV3DKTkuyMrw2jmk5Jvo7xVNVrIQBZ6AJZqvmkcyuDcHwCKpYztNBi8J7CXdSyaG5mPPjPyrb7hpv-c_Zd8ByHQCAGhsZFrNk0YtigMeUH1z9lQPtPqIhFkLo6wmTY4cEwSn2s5JVkHvPX6B8Na4BnYfQDRla697ABlcsAMaMseSVAblMAPNEeTvLlX9vqvEMEUVWTUB9yAUw6LlxlMNVybeQJuHRpaB3H2R4p9p5rXAczq5VCHB8qoR-SZz863X2fwarDkbXYuqP022Tb5tm0oz4mgiX-Q=w1119-h628-no)

![Progression_2](https://lh3.googleusercontent.com/mrr-cC1ftykLPMT4ePK2qYay0ro332u2ls__DPkFoEz0CT2KBgKtK9ebpOBSvc_7vtChcotjGE5k7t4o2s3prhdPoRgwjMCdB8sks15i6AXtr0gcq0fBA_yUeJHIkXr8T5JKZ3XfzH0DNQfifU4m1Hu7fWXVnRLtVDwbb0NOh4NxcQCQKhWHZw2ZwMcaxQheHIw5XaRjPpOME6EqeuT7CVTorUssKmA96C1LloyfM4HEzi0PKt-fwY9MDzv08rw_dAM-afa9Ra65k_1d6tGnd5g6lXlc4GZr16cX8xqpi_TlY4kichz-XFxkPPM1OdJOcCGpIGvJAo-v0APgQOk6WPcSfE8iF4fFtHckFIVe0QUuWLkwd-ETSaDWQRyJoPmLedON4RtUAoMUFxMH03zLzDI9xi7osSY2CUZdrSU6bhO2_T2RBUT5NS403QCBFxqnF3oN_PeQbDPfik_GIpQTCxDIz828Ami7_fkbTMHJXk41SKG6jpG8X3KILdYn1gHH2cDCFYT2ohzqNiZW_xPc3aTIQt5ZcW2tCLlUpcpIFX7NWYPNRQJJS_-HoAt-fQq5qmSk-3ApxFU4Tcb_I0yG4Q0pywZ2glHLJU6gjcjmYlcmdLVSxqybe5rFWZaVNT-3ykEydufYCuHULh4-wTmiQV8bOwqBhffMVwTKwV0eAapAaTVqwNDUrA0TEQH3FA=w1693-h952-no)