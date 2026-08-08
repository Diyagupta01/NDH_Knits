"""
NDH Knits — FastAPI Backend
"""
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import inquiries, products

# ── Logging ───────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)-8s  %(name)s  %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)


# ── Lifespan ──────────────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("NDH Knits API starting up…")
    yield
    logger.info("NDH Knits API shutting down…")


# ── App ───────────────────────────────────────────────────────────────────
app = FastAPI(
    title="NDH Knits API",
    description=(
        "REST API for NDH Knits — a B2B hosiery manufacturer based in Ludhiana, Punjab.\n\n"
        "Endpoints:\n"
        "- `/api/inquiries` — contact/inquiry form submissions\n"
        "- `/api/products`  — product category catalogue data\n"
    ),
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# ── CORS ──────────────────────────────────────────────────────────────────
# In production, replace ["*"] with the actual frontend domain.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


# ── Routers ───────────────────────────────────────────────────────────────
app.include_router(inquiries.router, prefix="/api")
app.include_router(products.router, prefix="/api")


# ── Health check ──────────────────────────────────────────────────────────
@app.get("/health", tags=["Health"], summary="Health check")
async def health() -> dict:
    return {"status": "ok", "service": "NDH Knits API"}
