from fastapi import APIRouter, HTTPException
from typing import List
from models import ContactMessage, ContactMessageCreate
from server import db

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("", response_model=ContactMessage)
async def create_contact_message(message: ContactMessageCreate):
    if not db:
        raise HTTPException(status_code=503, detail="Database not available")
    
    message_obj = ContactMessage(**message.dict())
    await db.contact_messages.insert_one(message_obj.dict())
    return message_obj

@router.get("", response_model=List[ContactMessage])
async def get_contact_messages():
    if not db:
        return []
    
    messages = await db.contact_messages.find().to_list(1000)
    return [ContactMessage(**message) for message in messages]