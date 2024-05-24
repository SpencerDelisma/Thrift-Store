from random import randint, choice as rc
from app import app
from models import db, Tshirt, Hoodie, Shoe, Pant

# Remote library imports
with app.app_context():
    db.drop_all()
    db.create_all()

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
            image_url='https://www.dior.com/couture/ecommerce/media/catalog/product/5/4/1700682482_H_24_1_LOOK_111_E07_ZH.jpg'  # Add image URL for Tshirt 3
        ),
        Tshirt(
            name='Louis Vuitton t-shirt',
            description='Louis Vuitton 2020 LV Planes Printed T-Shirt T-Shirt w/ Tags Black T- Shirts, Clothing LOU444485 The RealReal',
            price='109.69',
            image_url='https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-planes-printed-t-shirt-ready-to-wear--HIY38WNPG900_PM1_Side%20view.jpg'  # Add image URL for Tshirt 4
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
            image_url='https://shop.diesel.com/dw/image/v2/BBLG_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dw06bd1aa3/images/large/A06483_0ASUB_93R_F.jpg?q=80'  # Add image URL for Tshirt 10
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
            image_url='https://www.prada.com/content/dam/pradabkg_products/U/UJN/UJN824/11ZMF0002/UJN824_11ZM_F0002_S_222_MDDA.jpg'  # Add image URL for Tshirt 12
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

    hoodies = [
        Hoodie(
            name='Ami',
            description='Description for Hoodie 1',
            price='350.00',
            image_url=''  # Add image URL for Hoodie 1
        ),
        Hoodie(
            name='Chrome Heart',
            description='Description for Hoodie 2',
            price='880.00',
            image_url=''  # Add image URL for Hoodie 2
        ),
        Hoodie(
            name='Champions',
            description='Description for Hoodie 3',
            price='39.99',
            image_url=''  # Add image URL for Hoodie 3
        ),
        Hoodie(
            name='Dior',
            description='Description for Hoodie 4',
            price='309.99',
            image_url=''  # Add image URL for Hoodie 4
        ),
        Hoodie(
            name='Prada',
            description='Description for Hoodie 5',
            price='40.00',
            image_url=''  # Add image URL for Hoodie 5
        ),
        Hoodie(
            name='H&M',
            description='Description for Hoodie 6',
            price='39.99',
            image_url=''  # Add image URL for Hoodie 6
        ),
        Hoodie(
            name='Nike',
            description='Description for Hoodie 7',
            price='60.00',
            image_url=''  # Add image URL for Hoodie 7
        ),
        Hoodie(
            name='YEEZY',
            description='Description for Hoodie 8',
            price='200.00',
            image_url=''  # Add image URL for Hoodie 8
        ),
        Hoodie(
            name='GAP',
            description='Description for Hoodie 9',
            price='39.99',
            image_url=''  # Add image URL for Hoodie 9
        ),
        Hoodie(
            name='Gucci',
            description='Description for Hoodie 10',
            price='110.00',
            image_url=''  # Add image URL for Hoodie 10
        ),
        Hoodie(
            name='Louis Vuitton',
            description='Description for Hoodie 11',
            price='330.00',
            image_url=''  # Add image URL for Hoodie 11
        ),
        Hoodie(
            name='ZARA',
            description='Description for Hoodie 12',
            price='100.00',
            image_url=''  # Add image URL for Hoodie 12
        ),
        Hoodie(
            name='Addidas',
            description='Description for Hoodie 13',
            price='39.99',
            image_url=''  # Add image URL for Hoodie 13
        ),
        Hoodie(
            name='Balenciaga',
            description='Description for Hoodie 14',
            price='390.00',
            image_url=''  # Add image URL for Hoodie 14
        ),
        Hoodie(
            name='Abercrombie',
            description='Description for Hoodie 15',
            price='38.00',
            image_url=''  # Add image URL for Hoodie 15
        )
    ]
    db.session.add_all(hoodies)

    shoes = [
        Shoe(
            name='Shoe 1',
            description='Description for Shoe 1',
            price='59.99',
            image_url=''  # Add image URL for Shoe 1
        ),
        Shoe(
            name='Shoe 2',
            description='Description for Shoe 2',
            price='59.99',
            image_url=''  # Add image URL for Shoe 2
        ),
        Shoe(
            nameShoe 3',
            description='Description for Shoe 3',
            price='59.99',
            image_url=''  # Add image URL for Shoe 3
        ),
        Shoe(
            name='Shoe 4',
            description='Description for Shoe 4',
            price='59.99',
            image_url=''  # Add image URL for Shoe 4
        ),
        Shoe(
            name='Shoe 5',
            description='Description for Shoe 5',
            price='59.99',
            image_url=''  # Add image URL for Shoe 5
        ),
        Shoe(
            name='Shoe 6',
            description='Description for Shoe 6',
            price='59.99',
            image_url=''  # Add image URL for Shoe 6
        ),
        Shoe(
            name='Shoe 7',
            description='Description for Shoe 7',
            price='59.99',
            image_url=''  # Add image URL for Shoe 7
        ),
        Shoe(
            name='Shoe 8',
            description='Description for Shoe 8',
            price='59.99',
            image_url=''  # Add image URL for Shoe 8
        ),
        Shoe(
            name='Shoe 9',
            description='Description for Shoe 9',
            price='59.99',
            image_url=''  # Add image URL for Shoe 9
        ),
        Shoe(
            name='Shoe 10',
            description='Description for Shoe 10',
            price='59.99',
            image_url=''  # Add image URL for Shoe 10
        ),
        Shoe(
            name='Shoe 11',
            description='Description for Shoe 11',
            price='59.99',
            image_url=''  # Add image URL for Shoe 11
        ),
        Shoe(
            name='Shoe 12',
            description='Description for Shoe 12',
            price='59.99',
            image_url=''  # Add image URL for Shoe 12
        ),
        Shoe(
            name='Shoe 13',
            description='Description for Shoe 13',
            price='59.99',
            image_url=''  # Add image URL for Shoe 13
        ),
        Shoe(
            name='Shoe 14',
            description='Description for Shoe 14',
            price='59.99',
            image_url=''  # Add image URL for Shoe 14
        ),
        Shoe(
            name='Shoe 15',
            description='Description for Shoe 15',
            price='59.99',
            image_url=''  # Add image URL for Shoe 15
        )
    ]
    db.session.add_all(shoes)

    pants = [
        Pant(
            name='Prada',
            description='Description for Pant 1',
            price='39.99',
            image_url=''  # Add image URL for Pant 1
        ),
        Pant(
            name='Valentino',
            description='Description for Pant 2',
            price='49.99',
            image_url=''  # Add image URL for Pant 2
        ),
        Pant(
            name='Versace',
            description='Description for Pant 3',
            price='69.99',
            image_url=''  # Add image URL for Pant 3
        ),
        Pant(
            name='Ferragamo',
            description='Description for Pant 4',
            price='89.99',
            image_url=''  # Add image URL for Pant 4
        ),
        Pant(
            name='Givenchi',
            description='Description for Pant 5',
            price='70.99',
            image_url=''  # Add image URL for Pant 5
        ),
        Pant(
            name='Calvin Klein',
            description='Description for Pant 6',
            price='49.99',
            image_url=''  # Add image URL for Pant 6
        ),
        Pant(
            name='Dior',
            description='Description for Pant 7',
            price='429.99',
            image_url=''  # Add image URL for Pant 7
        ),
        Pant(
            name='Chrome Heart Blue-Jeans',
            description='Description for Pant 8',
            price='949.99',
            image_url=''  # Add image URL for Pant 8
        ),
        Pant(
            name='Black Denim',
            description='Description for Pant 9',
            price='9.99',
            image_url=''  # Add image URL for Pant 9
        ),
        Pant(
            name='Amiri',
            description='Description for Pant 10',
            price='409.99',
            image_url=''  # Add image URL for Pant 10
        ),
        Pant(
            name='GAP',
            description='Description for Pant 11',
            price='19.99',
            image_url=''  # Add image URL for Pant 11
        ),
        Pant(
            name='Carhart',
            description='Description for Pant 12',
            price='99.99',
            image_url=''  # Add image URL for Pant 12
        ),
        Pant(
            name='Gucci',
            description='Description for Pant 13',
            price='209.99',
            image_url=''  # Add image URL for Pant 13
        ),
        Pant(
            name='Louis Vuitton',
            description='Description for Pant 14',
            price='329.99',
            image_url=''  # Add image URL for Pant 14
        ),
        Pant(
            name='Chrome heart',
            description='Description for Pant 15',
            price='490.99',
            image_url=''  # Add image URL for Pant 15
        )
    ]
    db.session.add_all(pants)

    db.session.commit()
    print('Database seeded!')