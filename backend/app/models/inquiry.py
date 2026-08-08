"""
Pydantic models for inquiry/contact form submissions.
"""
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, Field, field_validator


class InquiryRequest(BaseModel):
    """Inbound inquiry from the contact form."""

    name: str = Field(..., min_length=2, max_length=120, description="Submitter's full name")
    company_name: Optional[str] = Field(None, max_length=200, description="Company or business name")
    phone: str = Field(..., min_length=7, max_length=30, description="Contact phone number")
    email: EmailStr = Field(..., description="Contact email address")
    product_category: Optional[str] = Field(None, max_length=100, description="Product category slug")
    product_detail: Optional[str] = Field(None, max_length=300, description="Specific product name / style context")
    quantity: Optional[str] = Field(None, max_length=200, description="Quantity or requirement description")
    message: str = Field(..., min_length=10, max_length=2000, description="Inquiry message")

    @field_validator("name", "phone", "message", mode="before")
    @classmethod
    def strip_whitespace(cls, v: str) -> str:
        return v.strip() if isinstance(v, str) else v

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "name": "Ramesh Kumar",
                    "company_name": "Kumar Traders",
                    "phone": "+91 98765 43210",
                    "email": "ramesh@kumartraders.com",
                    "product_category": "socks",
                    "quantity": "500 dozen pairs",
                    "message": "We are interested in bulk socks for the upcoming winter season.",
                }
            ]
        }
    }


class InquiryResponse(BaseModel):
    """Response returned after a successful inquiry submission."""

    success: bool
    message: str
    inquiry_id: str
    submitted_at: datetime
