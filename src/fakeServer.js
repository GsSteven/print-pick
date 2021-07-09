
const printerBrands = [
    {
        name: "Prusa",
        printers: [
            {
                name: "I3 MK3S+",
                price: 749,
                buildArea: [250, 210, 210],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/Prusa-i3.png',
                link: "https://www.prusa3d.com/original-prusa-i3-mk3/"
            },
            {
                name: "Mini+",
                price: 349,
                buildArea: [180, 180, 180],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/Prusa-Mini.png',
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
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/makerBotReplicator.png',
                link: "https://www.makerbot.com/3d-printers/replicator/"
            },
            {
                name: "Sketch",
                price: 1199,
                buildArea: [150, 150, 150],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/makerBotSketch.png',
                link: "https://store.makerbot.com/3d-printers/sketchs/makerbot-sketch-classroom-plus"
            },
            {
                name: "Method",
                price: 3999,
                buildArea: [190, 190, 200],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/makerBotMethod.png',
                link: "https://www.makerbot.com/3d-printers/method/"
            },
        ]
    },
    {
        name: "LulzBot",
        printers: [
            {
                name: "TAZ Pro",
                price: 4950,
                buildArea: [280, 280, 285],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/lulzBotTAZPro.png',
                link: "https://shop.lulzbot.com/taz-pro?ref=KT-PR0050NA"
            },
            {
                name: "Mini 2",
                price: 1495,
                buildArea: [160, 160, 180],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/lulzBotMini.png',
                link: "https://shop.lulzbot.com/lulzbot-mini-v2-0-boxed-for-retail-na-kt-pr0047na?ref=KT-PR0047NA"
            },
            {
                name: "TAZ Pro XT",
                price: 5495,
                buildArea: [280, 280, 586],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/lulzBotTAZProXT.png',
                link: "https://shop.lulzbot.com/lulzbot-taz-3d-printer-pro-xt-boxed-for-retail-na-kt-pr0056na?ref=KT-PR0056NA"
            },
            {
                name: "Workhorse",
                price: 2950,
                buildArea: [280, 280, 285],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/lulzBotWorkhorse.png',
                link: "https://shop.lulzbot.com/lulzbot-taz-3d-printer-workhorse-boxed-for-retail-na-kt-pr0051na?ref=KT-PR0051NA"
            },
            {
                name: "TAZ Pro S",
                price: 3995,
                buildArea: [280, 280, 285],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/lulzBotTAZProS.png',
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
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ender3pro.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-3-pro-high-precision-3d-printer"
            },
            {
                name: "Ender 3 V2",
                price: 249.99,
                buildArea: [220, 220, 250],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ender3proV2.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-upgraded-ender-3-v2-3d-printer"
            },
            {
                name: "CR-6 SE",
                price: 399.99,
                buildArea: [220, 220, 400],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/cr6SE.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3dcr-6-se-3d-printer"
            },
            {
                name: "Ender-5",
                price: 296.99,
                buildArea: [220, 220, 300],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ender5.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-5-diy-3d-printer-kit-220-220-300mm"
            },
            {
                name: "Ender-5 Pro",
                price: 355.99,
                buildArea: [220, 220, 300],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ender5pro.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-5-pro-3d-printer"
            },
            {
                name: "Ender-5 Pro PLUS",
                price: 569.99,
                buildArea: [350, 350, 400],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ender5plus.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-ender-5-plus-3d-printer"
            },
            {
                name: "CR-10 Max",
                price: 999.99,
                buildArea: [450, 450, 470],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/cr10max.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-cr-10-max-3d-printer-larger-printing-size-450-450-470mm"
            },
            {
                name: "CR-10 Mini",
                price: 269,
                buildArea: [300, 220, 300],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/cr10mini.png',
                link: "https://creality3d.shop/collections/3d-printer/products/creality3d-cr-10mini-3d-printer-with-resume-print-300x220x300mm"
            },
            {
                name: "CR-2020",
                price: 799,
                buildArea: [200, 200, 200],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/cr2020.png',
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
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/selectMini.png',
                link: "https://www.monoprice.com/product?p_id=15365"
            },
            {
                name: "Mini Delta V2",
                price: 179.99,
                buildArea: [110, 110, 120],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/monoPriceMiniDeltaV2.png',
                link: "https://www.monoprice.com/product?p_id=21666"
            },
            {
                name: "Voxel",
                price: 399.99,
                buildArea: [150, 150, 150],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/voxel.png',
                link: "https://www.monoprice.com/product?p_id=33820"
            },
            {
                name: "Ultimate 2",
                price: 499.99,
                buildArea: [200, 150, 150],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ultimate2.png',
                link: "https://www.monoprice.com/product?p_id=36045"
            },
            {
                name: "MP10",
                price: 399.99,
                buildArea: [300, 300, 400],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/MP10.png',
                link: "https://www.monoprice.com/product?p_id=34437"
            },
            {
                name: "MP10 Mini",
                price: 299.99,
                buildArea: [200, 200, 180],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/MP10Mini.png',
                link: "https://www.monoprice.com/product?p_id=34438"
            },
            {
                name: "Cadet",
                price: 199.99,
                buildArea: [100, 105, 100],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/cadet.png',
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
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/deltiQ2.png',
                link: "https://store.trilab3d.com/product/trilab-deltiq-l/"
            },
            {
                name: "DeltiQ2 Plus",
                price: 4078,
                buildArea: [250, 250, 500],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/deltiQ2Plus.png',
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
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/iFast.png',
                link: "http://www.qd3dprinter.com/products/i-fast/"
            },
            {
                name: "i-mate",
                price: 349,
                buildArea: [260, 200, 200],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/iMate.png',
                link: "http://www.qd3dprinter.com/products/i-mate/"
            },
            {
                name: "i-mates",
                price: 449,
                buildArea: [260, 200, 200],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/iMates.png',
                link: "http://www.qd3dprinter.com/products/i-mates/"
            },
            {
                name: "X-Max",
                price: 1099,
                buildArea: [300, 250, 300],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/xMax.png',
                link: "http://www.qd3dprinter.com/products/x-max/"
            },
            {
                name: "X-Plus",
                price: 699,
                buildArea: [270, 200, 200],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/xPlus.png',
                link: "http://www.qd3dprinter.com/products/x-plus/"
            },
            {
                name: "X-Pro",
                price: 780,
                buildArea: [230, 150, 150],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/xPro.png',
                link: "http://www.qd3dprinter.com/products/x-pro/"
            },
            {
                name: "X-Maker",
                price: 710,
                buildArea: [170, 150, 160],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/xMaker.png',
                link: "http://www.qd3dprinter.com/products/x-maker/"
            },
            {
                name: "X-One 2",
                price: 249,
                buildArea: [140, 140, 140],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/xOne2.png',
                link: "http://www.qd3dprinter.com/products/x-one-2/"
            }
        ]
    },
    {
        name: "Ultimaker",
        printers: [
            {
                name: "S5",
                price: 5995,
                buildArea: [330, 240, 300],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ultimakerS5.png',
                link: "https://ultimaker.com/3d-printers/ultimaker-s5"
            },
            {
                name: "S3",
                price: 4395,
                buildArea: [230, 190, 200],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ultimakerS3.png',
                link: "https://ultimaker.com/3d-printers/ultimaker-s3"
            },
            {
                name: "2+ Connect",
                price: 2499,
                buildArea: [223, 220, 205],
                img: 'https://print-picker.s3.us-east-2.amazonaws.com/ultimaker2PlusConnect.png',
                link: "https://ultimaker.com/3d-printers/ultimaker-2-plus-connect"
            }
        ]
    }

];

export default printerBrands;