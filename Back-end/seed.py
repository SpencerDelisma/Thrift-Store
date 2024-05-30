from random import randint, choice as rc
from app import app
from models import db, Tshirt, Hoodie, Shoe, Pant

# Remote library imports
with app.app_context():
    db.drop_all()
    db.create_all()
    Tshirt.query.delete()

    tshirts = [
        Tshirt(
            name='Culture Kings',
            description='American Thrift X Masters Of The Universe He-man Heavyweight T-Shirt B Culture Kings US',
            price='29.99',
            image_url='https://www.culturekings.com/cdn/shop/files/02045267-YB295_mens_0010_1024x1024.jpg?v=1698100171'  # Add image URL for Tshirt 1
        ),
        Tshirt(
            name='Sauron Vintage',
            description='American Thrift X The Lord Of The Rings Sauron Vintage T-Shirt Washed Black Vintage tshirts, Thrifting, Outfit of the day',
            price='40.99',
            image_url='https://www.culturekings.com/cdn/shop/files/02043203-YW607_mens_0010_800x.jpg?v=1697757204'  # Add image URL for Tshirt 2
        ),
        Tshirt(
            name='Christian Dior | OVERSIZED T-SHIRT',
            description='T-Shirts from Christian Dior, Short Sleeves, Logo, Luxury, 2024 SS',
            price='1039.99',
            image_url='https://i.pinimg.com/736x/81/40/9d/81409d6ddd806e800b6fdebfed7d4eb2.jpg'  # Add image URL for Tshirt 3
        ),
        Tshirt(
            name='Louis Vuitton t-shirt',
            description='Louis Vuitton 2020 LV Planes Printed T-Shirt T-Shirt w/ Tags Black T- Shirts, Clothing LOU444485 The RealReal',
            price='109.69',
            image_url='https://buyma-global-prod-img.s3.amazonaws.com/img/upload/product_image/be397ada-05aa-48ef-974d-44f57c0bfcf9/8df887bb-3f2c-4d06-a413-6211a4994c11.png'  # Add image URL for Tshirt 4
        ),
        Tshirt(
            name='Hermes Unisex',
            description='Hermes Paris Unisex-T',
            price='29.99',
            image_url='https://www.omsshops.com/wp-content/uploads/2022/02/mens-heavyweight-tee-black-front-620b92c62c41b.jpg'  # Add image URL for Tshirt 5
        ),
        Tshirt(
            name='Hermès UAE',
            description='T-shirt with leather detail Hermès UAE',
            price='89.00',
            image_url='https://www.yenikoza.com.tr/productimages/266939/big/23y801000365_d801007-3.jpg'  # Add image URL for Tshirt 6
        ),
        Tshirt(
            name='Yeezy T-Shirt',
            description='Yeezy 350 Box T-Shirt',
            price='49.00',
            image_url='https://streetgarm.com/wp-content/uploads/2022/08/yeezy-350-box-t-shirt-streetgarm-arm-shoulder-facial-216.jpg'  # Add image URL for Tshirt 7
        ),
        Tshirt(
            name='YEEZY GAP UNRELEASED-T NAVY BLUE',
            description='YEEZY GAP UNRELEASED SEASON T-SHIRT NAVY BLUE',
            price='69.00',
            image_url='https://throwbackvault.com/cdn/shop/files/R5_15181_c1290430-432a-4295-b66e-1927907fb0dc.jpg?v=1712076567&width=1100'  # Add image URL for Tshirt 8
        ),
        Tshirt(
            name='Carhartt WIP',
            description='Carhartt WIP vista pigment dye t-shirt in blue',
            price='30.00',
            image_url='https://images.asos-media.com/products/carhartt-wip-vista-pigment-dye-t-shirt-in-blue/24136691-1-blue?$n_640w$&wid=513&fit=constrain'  # Add image URL for Tshirt 9
        ),
        Tshirt(
            name='T-Just-E16',
            description='Mens regular-fit T-shirt made from cotton jersey. This tee has been screen-printed with a maxi Diesel For Successful Living logo whilst damp for a bleeding effect',
            price='79.99',
            image_url='https://i.pinimg.com/736x/1a/60/f1/1a60f1a4148bbb924073baaa9f6c163f.jpg'  # Add image URL for Tshirt 10
        ),
        Tshirt(
            name='PRADA',
            description='BADGE POCKET T SHIRT',
            price='39.00',
            image_url='https://www.flannels.com/images/imgzoom/59/59911003_xxl.jpg'  # Add image URL for Tshirt 11
        ),
        Tshirt(
            name='Prada Black_T',
            description='Cotton Prada-Black T',
            price='99.99',
            image_url='https://buyma-global-prod-img.s3.amazonaws.com/img/upload/product_image/c604ef89-7eaf-44ca-95bd-ae9bf4a4c661/d8cb8f9a-8168-4444-b2ba-7a3e4a23b163.png'  # Add image URL for Tshirt 12
        ),
        Tshirt(
            name='Balenciaga_grey_T',
            description='Balenciaga Grey-T',
            price='419.99',
            image_url='https://noblemars.com/cdn/shop/products/612966-TNVG7-9244_af_800x.jpg?v=1669653570'  # Add image URL for Tshirt 13
        ),
        Tshirt(
            name='SS24 LIDOTOPS',
            description='RICK OWENS FOREVER LEVEL T IN BLACK VISCOSE SILK ',
            price='399.99',
            image_url='https://cdn.rickowens.eu/products/153663/large/RF00M6264_JS_09_01.jpg?1687351225'  # Add image URL for Tshirt 14
        ),
        Tshirt(
            name='TEAM WANG T-SHIRT',
            description='TEAM WANG T-SHIRT TEAM-WANG DESIGN TEAM WANG design',
            price='99.99',
            image_url='https://cdn-images.farfetch-contents.com/20/17/33/53/20173353_50309676_1000.jpg'  # Add image URL for Tshirt 15
        )
    ]
    db.session.add_all(tshirts)

    db.session.commit()
    

    hoodies = [
        Hoodie(
            name='Ami',
            description='Bievenue a A paris',
            price='350.50',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/066/684/631/original/885777_01.jpg.jpeg?action=crop&width=600'  # Add image URL for Hoodie 1
        ),
        Hoodie(
            name='Chrome Heart',
            description='New York Style Hoodie',
            price='880.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/054/162/709/original/768202_01.jpg.jpeg?action=crop&width=600'  # Add image URL for Hoodie 2
        ),
        Hoodie(
            name='Supreme',
            description='100% cotton',
            price='939.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/100/160/378/original/1416150_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 3
        ),
        Hoodie(
            name='Dior',
            description='la Boutique Luxuese de Paris avec des Toiles',
            price='309.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/100/581/283/original/745458_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 4
        ),
        Hoodie(
            name='Parra',
            description='La maison du couture exclusive Hoodie',
            price='1040.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/300/515/original/913777_01.jpg.jpeg?action=crop&width=600'  # Add image URL for Hoodie 5
        ),
        Hoodie(
            name='FEAR OF GOD',
            description='EXclusive Materials FG hoodie',
            price='309.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/097/762/283/original/986346_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 6
        ),
        Hoodie(
            name='ESSENTIALS',
            description='100% cotton',
            price='250.50',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/097/762/282/original/1224575_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 7
        ),
        Hoodie(
            name='YEEZY',
            description='YE gap hoodie',
            price='399.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/988/478/original/950498_01.jpg.jpeg?action=crop&width=600'  # Add image URL for Hoodie 8
        ),
        Hoodie(
            name='AMIRI',
            description='SMOKE AMIRI',
            price='99.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/093/735/696/original/1132193_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 8
        ),
        Hoodie(
            name='DENIM TEAR',
            description='OFFSET VERSION',
            price='399.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/099/242/134/original/1396947_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 8
        ),
        Hoodie(
            name='GOLF FWANG',
            description='AIRBUS',
            price='99.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/097/974/935/original/1370525_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 8
        ),
        Hoodie(
            name='STUSSY',
            description='GALAXY DOVE-BLACK',
            price='99.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_pictures/images/079/663/008/original/1060330_00.png.png?action=crop&width=360'  # Add image URL for Hoodie 8
        ),
    ]
    db.session.add_all(hoodies)
    db.session.commit()

    shoes = [
        Shoe(
            name='YEEZY 350',
            description='BLACK YEEZY 350 ',
            price='359.99',
            image_url='https://sothebys-md.brightspotcdn.com/dims4/default/6f49066/2147483647/strip/true/crop/2000x2000+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fcd%2F78%2Fb88486ac4c0ab4a26987e3a832a9%2F7.jpg'  # Add image URL for Shoe 1
        ),
        Shoe(
            name='YEEZY 700',
        description='Adidas yeezy 700 mauve',
            price='559.99',
            image_url='https://images.stockx.com/360/adidas-Yeezy-700-Mauve/Images/adidas-Yeezy-700-Mauve/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1634916584&h=320&q=60'  # Add image URL for Shoe 2
        ),
        Shoe(
            name = 'Timberland',
            description='Timberland Icon6',
            price='99.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/066/290/424/original/543681_01.jpg.jpeg?action=crop&width=600'  # Add image URL for Shoe 3
        ),
        Shoe(
            name='PRADA CUP',
            description='black Prada Sneakers',
            price='559.99',
            image_url='https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_420/01/nm_4441027_100000_e'  # Add image URL for Shoe 4
        ),
        Shoe(
            name='NEW BALANCE',
            description='White Dior ',
            price='1059.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/813/908/original/1019489_01.jpg.jpeg?action=crop&width=600'  # Add image URL for Shoe 5
        ),
        Shoe(
            name='DIOR B22',
            description='Mesh and Technical Fabric',
            price='1009.99',
            image_url='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/070/094/282/original/883976_01.jpg.jpeg?action=crop&width=600'  # Add image URL for Shoe 6
        ),
        Shoe(
            name='RICK OWENS ',
            description='DRKSHDW',
            price='959.99',
            image_url='https://cdn-images.farfetch-contents.com/20/27/30/33/20273033_50410816_600.jpg'  # Add image URL for Shoe 7
        ),
        Shoe(
            name='BALENCIAGA BOUCER BEIGE',
            description='Leather free • Sneaker • Mesh and nylon • Worn-Out effect • Extreme tire tread sole • 15mm arch • Balenciaga logo debossed on the tongue',
            price='1259.99',
            image_url='https://balenciaga.dam.kering.com/m/53dc0467b734d93f/Medium-685613W2RA69700_F.jpg?v=6'  # Add image URL for Shoe 8
        ),
        Shoe(
            name='WOMEN RUNNER',
            description='Description for Shoe 9',
            price='1159.99',
            image_url='https://balenciaga.dam.kering.com/m/114b4bf34f230ce3/Small-772767W3RMU8123_X.jpg?v=7'  # Add image URL for Shoe 9
        ),
        Shoe(
            name='ADIDAS SAMBA',
            description='Description for Shoe 10',
            price='99.99',
            image_url='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg'  # Add image URL for Shoe 10
        ),
        
    ]
    db.session.add_all(shoes)
    db.session.commit()

    pants = [
        Pant(
            name='Prada',
            description='Re-Nylon Pants',
            price='2339.99',
            image_url='https://www.prada.com/content/dam/pradabkg_products/S/SPH/SPH130/1WQ8F0002/SPH130_1WQ8_F0002_S_211_SLF.jpg'  # Add image URL for Pant 1
        ),
        Pant(
            name='Valentino Pants',
            description='Wide-Leg Logo-Embroided shell Track Pants',
            price='459.99',
            image_url='https://www.mrporter.com/variants/images/43769801096044885/in/w2000_q60.jpg'  # Add image URL for Pant 2
        ),
        Pant(
            name='Versace',
            description='Piece number Slim Jeans',
            price='269.99',
            image_url='https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd2bac5c4/original/90_E75GAB5D0-ECDW00_E909_10_Piece~Number~Slim~Jeans--Versace-online-store_1_0.jpg?sw=850&q=85&strip=true'  # Add image URL for Pant 3
        ),
        Pant(
            name='Ferragamo',
            description='Salvatore Farragamo Straight Leg-Cargo pants ',
            price='89.99',
            image_url='https://cdn.ferragamo.com/wcsstore/FerragamoCatalogAssetStore/images/products/761101/761101_00_r20.jpg'  # Add image URL for Pant 4
        ),
        Pant(
            name='Givenchy',
            description='Tappered Logo-print Shell',
            price='570.99',
            image_url='https://www.mrporter.com/variants/images/1647597293393364/in/w2000_q60.jpg'  # Add image URL for Pant 5
        ),
        Pant(
            name='Calvin Klein',
            description='Modern fit non-iron pant',
            price='49.99',
            image_url='https://www.miltons.com/cdn/shop/products/J7Y0020_JINNY_1.jpg?v=1569523605'  # Add image URL for Pant 6
        ),
        Pant(
            name='Dior',
            description='Dior womens Dior-Chez moi',
            price='429.99',
            image_url='https://www.dior.com/couture/ecommerce/media/catalog/product/v/l/1612446374_121P23A6608_X5803_E01_GHC.jpg'  # Add image URL for Pant 7
        ),
        Pant(
            name='Chrome Heart Blue-Jeans',
            description='Fleur Knee Blue',
            price='9490.99',
            image_url='https://images.stockx.com/images/Chrome-Hearts-Fleur-Knee-Cross-Patch-Jeans-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1668741064'  # Add image URL for Pant 8
        ),
        Pant(
            name='Black Denim',
            description='Fader denim',
            price='9.99',
            image_url='https://enjoico.com/cdn/shop/products/enjoiFaderDenimPantsS1_1200x1200.jpg?v=1606506785'  # Add image URL for Pant 9
        ),
        Pant(
            name='Amiri',
            description='Amiri Hibiscus Floral-Print',
            price='409.99',
            image_url='https://cdna.lystit.com/photos/farfetch/36964cf7/amiri-blue-Hibiscus-Floral-print-Skinny-Jeans.jpeg'  # Add image URL for Pant 10
        ),
        Pant(
            name='Carhart',
            description='Dungaree Work',
            price='69.99',
            image_url='https://static.grainger.com/rp/s/is/image/Grainger/4ULZ5_AS01?$adapimg$&hei=536&wid=536'  # Add image URL for Pant 12
        ),
        Pant(
            name='Gucci',
            description='jumbo GG denim pants',
            price='209.99',
            image_url='https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1678151777/678811_XDBTX_4492_001_100_0000_Light.jpg'  # Add image URL for Pant 13
        ),
        Pant(
            name='Louis Vuitton',
            description='Monogram denim pants',
            price='329.99',
            image_url='https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--HQD02WFRVMU1_PM2_Front%20view.jpg?wid=750&hei=870'  # Add image URL for Pant 14
        ),
        Pant(
            name='Chrome heart',
            description='vintage Levis Jeans BLack Mens',
            price='4900.99',
            image_url='https://images.stockx.com/images/Chrome-Hearts-Vintage-Levis-Jeans-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1641421722'  # Add image URL for Pant 15
        )
    
    ]
    db.session.add_all(pants)
    db.session.commit()
print('Database seeded!')