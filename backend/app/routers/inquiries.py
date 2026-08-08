"""
Inquiry router — handles contact/inquiry form submissions.
Submissions are logged to stdout for now.
When a database is connected, replace the in-memory store with DB writes.
"""
import json
import logging
import uuid
from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, status

from app.models.inquiry import InquiryRequest, InquiryResponse

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/inquiries", tags=["Inquiries"])

# ── In-memory store (replace with DB when ready) ──────────────────────────
_inquiry_store: list[dict] = []


@router.post(
    "/",
    response_model=InquiryResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact/inquiry form",
    description=(
        "Accepts a B2B inquiry from the contact form. "
        "Validates input, stores the inquiry, and returns a confirmation."
    ),
)
async def submit_inquiry(inquiry: InquiryRequest) -> InquiryResponse:
    inquiry_id = str(uuid.uuid4())
    submitted_at = datetime.now(tz=timezone.utc)

    record = {
        "id": inquiry_id,
        "submitted_at": submitted_at.isoformat(),
        **inquiry.model_dump(),
    }

    _inquiry_store.append(record)

    # Log to stdout so submissions are visible in dev
    logger.info("New inquiry received:\n%s", json.dumps(record, indent=2, default=str))

    return InquiryResponse(
        success=True,
        message=(
            "Thank you for your inquiry. We have received your message "
            "and will get back to you shortly."
        ),
        inquiry_id=inquiry_id,
        submitted_at=submitted_at,
    )


@router.get(
    "/",
    summary="List all submitted inquiries",
    description="Returns all inquiries stored in the current session (in-memory). For internal/admin use.",
)
async def list_inquiries() -> list[dict]:
    return _inquiry_store
