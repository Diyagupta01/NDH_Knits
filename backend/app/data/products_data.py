"""
Static product category data.
Replace with database queries when a database is connected.
"""
from app.models.product import ProductCategory

PRODUCT_CATEGORIES: list[ProductCategory] = [
    ProductCategory(
        id="socks",
        slug="socks",
        name="Socks",
        short_description=(
            "A comprehensive range of knitted socks crafted for comfort, "
            "durability, and consistent fit — suitable for all ages and seasons."
        ),
        description=(
            "NDH Knits manufactures a wide range of socks designed to meet the demands "
            "of the wholesale and retail market. Each pair is knitted with precision to "
            "ensure consistent sizing, comfortable fit, and lasting durability. Our socks "
            "are available for all age groups and across seasonal requirements."
        ),
        hero_image=None,
        gallery=[],
        features=[],
        sizes=[],
        materials=[],
        colors=[],
        specifications={},
        inquiry_enabled=True,
    ),
    ProductCategory(
        id="gloves",
        slug="gloves",
        name="Gloves",
        short_description=(
            "Precision-knitted gloves offering warmth and flexibility, designed "
            "for wholesale supply across retail and distribution channels."
        ),
        description=(
            "Our knitted gloves are manufactured to deliver consistent warmth and a "
            "reliable fit across all sizes. Designed for bulk wholesale supply, each pair "
            "meets our standard quality benchmarks for stitching, elasticity, and finish."
        ),
        hero_image=None,
        gallery=[],
        features=[],
        sizes=[],
        materials=[],
        colors=[],
        specifications={},
        inquiry_enabled=True,
    ),
    ProductCategory(
        id="caps",
        slug="caps",
        name="Caps",
        short_description=(
            "Warm, well-fitted knitted caps manufactured to meet bulk requirements "
            "with consistent quality and finish."
        ),
        description=(
            "NDH Knits manufactures knitted caps that combine warmth with a clean, "
            "market-ready finish. Produced to meet wholesale volume requirements, our caps "
            "are crafted for consistent sizing and reliable quality across every batch."
        ),
        hero_image=None,
        gallery=[],
        features=[],
        sizes=[],
        materials=[],
        colors=[],
        specifications={},
        inquiry_enabled=True,
    ),
    ProductCategory(
        id="mufflers",
        slug="mufflers",
        name="Mufflers",
        short_description=(
            "Soft, durable mufflers produced in a variety of styles to suit "
            "wholesale market demands across India."
        ),
        description=(
            "Our mufflers are knitted for softness, durability, and visual appeal. "
            "Manufactured in Ludhiana with a focus on consistent quality, they are designed "
            "to meet the diverse requirements of wholesale buyers across the Indian market."
        ),
        hero_image=None,
        gallery=[],
        features=[],
        sizes=[],
        materials=[],
        colors=[],
        specifications={},
        inquiry_enabled=True,
    ),
    ProductCategory(
        id="thermal-wear",
        slug="thermal-wear",
        name="Thermal Wear",
        short_description=(
            "Reliable thermal innerwear engineered to retain warmth without "
            "compromising on comfort or wearability."
        ),
        description=(
            "NDH Knits thermal wear is manufactured to provide effective insulation through "
            "the cold season. Built for comfort against the skin and durable enough for "
            "regular use, our thermal range is a reliable addition to any wholesale hosiery catalogue."
        ),
        hero_image=None,
        gallery=[],
        features=[],
        sizes=[],
        materials=[],
        colors=[],
        specifications={},
        inquiry_enabled=True,
    ),
    ProductCategory(
        id="leg-warmers",
        slug="leg-warmers",
        name="Leg Warmers",
        short_description=(
            "A versatile range of knitted leg warmers available in multiple styles — "
            "from footless and knee caps to full-length and hipless variants."
        ),
        description=(
            "NDH Knits manufactures a complete range of leg warmers designed for comfort, "
            "warmth, and consistent fit. Available in four distinct styles to meet varied "
            "wholesale and retail requirements, our leg warmers are knitted with the same "
            "precision and quality standards applied across all NDH Knits products."
        ),
        hero_image=None,
        gallery=[],
        features=[],
        sizes=[],
        materials=[],
        colors=[],
        specifications={},
        inquiry_enabled=True,
    ),
    ProductCategory(
        id="knitted-essentials",
        slug="knitted-essentials",
        name="Knitted Essentials",
        short_description=(
            "An assorted range of quality knitted products complementing our "
            "core hosiery line."
        ),
        description=(
            "Beyond our core hosiery categories, NDH Knits produces a range of knitted "
            "essentials — complementary products crafted to the same manufacturing and "
            "quality standards. This category is designed to accommodate an expanding "
            "product range as new items are added."
        ),
        hero_image=None,
        gallery=[],
        features=[],
        sizes=[],
        materials=[],
        colors=[],
        specifications={},
        inquiry_enabled=True,
    ),
]


def get_all_categories() -> list[ProductCategory]:
    return PRODUCT_CATEGORIES


def get_category_by_slug(slug: str) -> ProductCategory | None:
    return next((c for c in PRODUCT_CATEGORIES if c.slug == slug), None)
