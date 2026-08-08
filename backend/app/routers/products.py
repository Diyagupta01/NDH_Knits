"""
Products router — serves product category data.
"""
from fastapi import APIRouter, HTTPException, status

from app.data.products_data import get_all_categories, get_category_by_slug
from app.models.product import ProductCategory, ProductCategoryList

router = APIRouter(prefix="/products", tags=["Products"])


@router.get(
    "/",
    response_model=ProductCategoryList,
    summary="List all product categories",
)
async def list_categories() -> ProductCategoryList:
    categories = get_all_categories()
    return ProductCategoryList(categories=categories, total=len(categories))


@router.get(
    "/{slug}",
    response_model=ProductCategory,
    summary="Get a product category by slug",
)
async def get_category(slug: str) -> ProductCategory:
    category = get_category_by_slug(slug)
    if not category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product category '{slug}' not found.",
        )
    return category
