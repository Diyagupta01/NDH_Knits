"""
Pydantic models for product categories.
Structured to support future database integration.
"""
from typing import Optional
from pydantic import BaseModel, Field


class SubCategory(BaseModel):
    """A sub-variant within a product category."""

    id: str
    name: str
    description: str


class ProductCategory(BaseModel):
    """A single product category."""

    id: str
    slug: str
    name: str
    short_description: str
    description: str
    hero_image: Optional[str] = None
    gallery: list[str] = Field(default_factory=list)
    features: list[str] = Field(default_factory=list)
    sizes: list[str] = Field(default_factory=list)
    materials: list[str] = Field(default_factory=list)
    colors: list[str] = Field(default_factory=list)
    specifications: dict[str, str] = Field(default_factory=dict)
    subcategories: list[SubCategory] = Field(default_factory=list)
    inquiry_enabled: bool = True


class ProductCategoryList(BaseModel):
    """List of product categories."""

    categories: list[ProductCategory]
    total: int
