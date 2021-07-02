import prusa1 from './images/Prusa/Prusa-i3.png';
import prusa2 from './images/Prusa/Prusa-Mini.png';
import makerBot1 from './images/MakerBot/makerBotReplicator.png';
import makerBot2 from './images/MakerBot/makerBotSketch.png';
import lulzBot1 from './images/LulzBot/lulzBotTAZPro.png';
import lulzBot2 from './images/LulzBot/lulzBotMini.png';
import lulzBot3 from './images/LulzBot/lulzBotTAZProXT.png';
import lulzBot4 from './images/LulzBot/lulzBotWorkhorse.png';
import lulzBot5 from './images/LulzBot/lulzBotTAZProS.png';
import creality1 from './images/Creality/ender3pro.png';
import creality2 from './images/Creality/ender3proV2.png';
import creality3 from './images/Creality/cr6SE.png';
import creality4 from './images/Creality/ender5.png';
import creality5 from './images/Creality/ender5pro.png';
import creality6 from './images/Creality/ender5plus.png';
import creality7 from './images/Creality/cr10max.png';
import creality8 from './images/Creality/cr10mini.png';
import creality9 from './images/Creality/cr2020.png';
import monoPrice1 from './images/MonoPrice/selectMini.png';
import monoPrice2 from './images/MonoPrice/monoPriceMiniDeltaV2.png';
import monoPrice3 from './images/MonoPrice/voxel.png';
import monoPrice4 from './images/MonoPrice/ultimate2.png';
import monoPrice5 from './images/MonoPrice/MP10.png';
import monoPrice6 from './images/MonoPrice/MP10Mini.png';
import monoPrice7 from './images/MonoPrice/cadet.png';
import triLab1 from './images/TriLab/deltiQ2.png';
import triLab2 from './images/TriLab/deltiQ2Plus.png';
import qidi1 from './images/Qidi/iFast.png';
import qidi2 from './images/Qidi/iMate.png';
import qidi3 from './images/Qidi/iMates.png';
import qidi4 from './images/Qidi/xMax.png';
import qidi5 from './images/Qidi/xPlus.png';
import qidi6 from './images/Qidi/xPro.png';
import qidi7 from './images/Qidi/xMaker.png';
import qidi8 from './images/Qidi/xOne2.png';


const printerBrands = [
    {
        name: "Prusa",
        printers: [
            {
                name: "I3 MK3S+",
                price: 749,
                buildArea: [250, 210, 210],
                img: prusa1,
                link: "https://www.prusa3d.com/original-prusa-i3-mk3/"
            },
            {
                name: "Mini+",
                price: 349,
                buildArea: [180, 180, 180],
                img: prusa2,
                link: "https://www.prusa3d.com/original-prusa-mini/"
            }
        ]
    },
    {
        name: "MakerBot",
        printers: [
            {
                name: "Replicator+",
                price: 1999,
                buildArea: [295, 195, 165],
                img: makerBot1,
                link: "https://www.makerbot.com/3d-printers/replicator/"
            },
            {
                name: "Sketch",
                price: 1199,
                buildArea: [150, 150, 150],
                img: makerBot2,
                link: "https://store.makerbot.com/3d-printers/sketchs/makerbot-sketch-classroom-plus"
            }
        ]
    },
    {
        name: "LulzBot",
        printers: [
            {
                name: "TAZ Pro",
                price: 4950,
                buildArea: [280, 280, 285],
                img: lulzBot1,
                link: "https://shop.lulzbot.com/taz-pro?ref=KT-PR0050NA"
            },
            {
                name: "Mini 2",
                price: 1495,
                buildArea: [160, 160, 180],
                img: lulzBot2,
                link: "https://shop.lulzbot.com/lulzbot-mini-v2-0-boxed-for-retail-na-kt-pr0047na?ref=KT-PR0047NA"
            },
            {
                name: "TAZ Pro XT",
                price: 5495,
                buildArea: [280, 280, 586],
                img: lulzBot3,
                link: "https://shop.lulzbot.com/lulzbot-taz-3d-printer-pro-xt-boxed-for-retail-na-kt-pr0056na?ref=KT-PR0056NA"
            },
            {
                name: "Workhorse",
                price: 2950,
                buildArea: [280, 280, 285],
                img: lulzBot4,
                link: "https://shop.lulzbot.com/lulzbot-taz-3d-printer-workhorse-boxed-for-retail-na-kt-pr0051na?ref=KT-PR0051NA"
            },
            {
                name: "TAZ Pro S",
                price: 3995,
                buildArea: [280, 280, 285],
                img: lulzBot5,
                link: "https://shop.lulzbot.com/taz-pro-s?ref=KT-PR0055NA"
            }
        ]
    },
    {
        name: "Creality",
        printers: [
            {
                name: "Ender 3 Pro",
                price: 200,
                buildArea: [220, 220, 250],
                img: creality1,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-3-pro-high-precision-3d-printer"
            },
            {
                name: "Ender 3 V2",
                price: 249.99,
                buildArea: [220, 220, 250],
                img: creality2,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-upgraded-ender-3-v2-3d-printer"
            },
            {
                name: "CR-6 SE",
                price: 399.99,
                buildArea: [220, 220, 400],
                img: creality3,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3dcr-6-se-3d-printer"
            },
            {
                name: "Ender-5",
                price: 296.99,
                buildArea: [220, 220, 300],
                img: creality4,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-5-diy-3d-printer-kit-220-220-300mm"
            },
            {
                name: "Ender-5 Pro",
                price: 355.99,
                buildArea: [220, 220, 300],
                img: creality5,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-5-pro-3d-printer"
            },
            {
                name: "Ender-5 Pro PLUS",
                price: 569.99,
                buildArea: [350, 350, 400],
                img: creality6,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-5-plus-3d-printer"
            },
            {
                name: "CR-10 Max",
                price: 999.99,
                buildArea: [450, 450, 470],
                img: creality7,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-cr-10-max-3d-printer-larger-printing-size-450-450-470mm"
            },
            {
                name: "CR-10 Mini",
                price: 269,
                buildArea: [300, 220, 300],
                img: creality8,
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-cr-10mini-3d-printer-with-resume-print-300x220x300mm"
            },
            {
                name: "CR-2020",
                price: 799,
                buildArea: [200, 200, 200],
                img: creality9,
                link: "https://creality3d.shop/collections/3d-printer/products/creality-3d-cr-2020-3d-printer-assembled-200x200x200mm-support-abs"
            }
        ]
    },
    {
        name: "Monoprice",
        printers: [
            {
                name: "Select Mini",
                price: 199.99,
                buildArea: [120, 120, 120],
                img: monoPrice1,
                link: "https://www.monoprice.com/product?p_id=15365"
            },
            {
                name: "Mini Delta V2",
                price: 179.99,
                buildArea: [110, 110, 120],
                img: monoPrice2,
                link: "https://www.monoprice.com/product?p_id=21666"
            },
            {
                name: "Voxel",
                price: 399.99,
                buildArea: [150, 150, 150],
                img: monoPrice3,
                link: "https://www.monoprice.com/product?p_id=33820"
            },
            {
                name: "Ultimate 2",
                price: 499.99,
                buildArea: [200, 150, 150],
                img: monoPrice4,
                link: "https://www.monoprice.com/product?p_id=36045"
            },
            {
                name: "MP10",
                price: 399.99,
                buildArea: [300, 300, 400],
                img: monoPrice5,
                link: "https://www.monoprice.com/product?p_id=34437"
            },
            {
                name: "MP10 Mini",
                price: 299.99,
                buildArea: [200, 200, 180],
                img: monoPrice6,
                link: "https://www.monoprice.com/product?p_id=34438"
            },
            {
                name: "Cadet",
                price: 199.99,
                buildArea: [100, 105, 100],
                img: monoPrice7,
                link: "https://www.monoprice.com/product?p_id=40108"
            }
        ]
    },
    {
        name: "TriLab",
        printers: [
            {
                name: "DeltiQ2",
                price: 3598,
                buildArea: [250, 250, 300],
                img: triLab1,
                link: "https://store.trilab3d.com/product/trilab-deltiq-l/"
            },
            {
                name: "DeltiQ2 Plus",
                price: 4078,
                buildArea: [250, 250, 500],
                img: triLab2,
                link: "https://store.trilab3d.com/product/trilab-deltiq-2-plus/"
            }
        ]
    },
    {
        name: "QidiTech",
        printers: [
            {
                name: "i-fast",
                price: 2499,
                buildArea: [330, 250, 320],
                img: qidi1,
                link: "http://www.qd3dprinter.com/products/i-fast/"
            },
            {
                name: "i-mate",
                price: 349,
                buildArea: [260, 200, 200],
                img: qidi2,
                link: "http://www.qd3dprinter.com/products/i-mate/"
            },
            {
                name: "i-mates",
                price: 449,
                buildArea: [260, 200, 200],
                img: qidi3,
                link: "http://www.qd3dprinter.com/products/i-mates/"
            },
            {
                name: "X-Max",
                price: 1099,
                buildArea: [300, 250, 300],
                img: qidi4,
                link: "http://www.qd3dprinter.com/products/x-max/"
            },
            {
                name: "X-Plus",
                price: 699,
                buildArea: [270, 200, 200],
                img: qidi5,
                link: "http://www.qd3dprinter.com/products/x-plus/"
            },
            {
                name: "X-Pro",
                price: 780,
                buildArea: [230, 150, 150],
                img: qidi6,
                link: "http://www.qd3dprinter.com/products/x-pro/"
            },
            {
                name: "X-Maker",
                price: 710,
                buildArea: [170, 150, 160],
                img: qidi7,
                link: "http://www.qd3dprinter.com/products/x-maker/"
            },
            {
                name: "X-One 2",
                price: 249,
                buildArea: [140, 140, 140],
                img: qidi8,
                link: "http://www.qd3dprinter.com/products/x-one-2/"
            }
        ]
    },

];

export default printerBrands;