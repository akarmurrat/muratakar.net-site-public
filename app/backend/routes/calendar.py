from fastapi import APIRouter, HTTPException
from typing import List
from models import CalendarEvent, CalendarEventCreate
from server import db

router = APIRouter(prefix="/api/calendar", tags=["calendar"])

@router.get("", response_model=List[CalendarEvent])
async def get_calendar_events():
    events = await db.calendar_events.find().to_list(1000)
    return [CalendarEvent(**event) for event in events]

@router.get("/{event_id}", response_model=CalendarEvent)
async def get_calendar_event(event_id: str):
    event = await db.calendar_events.find_one({"id": event_id})
    if not event:
        raise HTTPException(status_code=404, detail="Calendar event not found")
    return CalendarEvent(**event)

@router.post("", response_model=CalendarEvent)
async def create_calendar_event(event: CalendarEventCreate):
    event_obj = CalendarEvent(**event.dict())
    await db.calendar_events.insert_one(event_obj.dict())
    return event_obj

@router.put("/{event_id}", response_model=CalendarEvent)
async def update_calendar_event(event_id: str, event: CalendarEventCreate):
    existing = await db.calendar_events.find_one({"id": event_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Calendar event not found")
    
    updated_event = CalendarEvent(id=event_id, **event.dict())
    await db.calendar_events.replace_one({"id": event_id}, updated_event.dict())
    return updated_event

@router.delete("/{event_id}")
async def delete_calendar_event(event_id: str):
    result = await db.calendar_events.delete_one({"id": event_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Calendar event not found")
    return {"message": "Calendar event deleted successfully"}
