from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Projects Model
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    image: str
    technologies: List[str]
    category: str
    link: str
    date: str

class ProjectCreate(BaseModel):
    title: str
    description: str
    image: str
    technologies: List[str]
    category: str
    link: str
    date: str

# Blog Posts Model
class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    content: str
    category: str
    date: str
    readTime: str
    image: str

class BlogPostCreate(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str
    date: str
    readTime: str
    image: str

# Calendar Events Model
class CalendarEvent(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    date: str
    time: str
    type: str  # 'meeting', 'work', 'task'

class CalendarEventCreate(BaseModel):
    title: str
    description: str
    date: str
    time: str
    type: str

# Timeline Events Model
class TimelineEvent(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    year: str
    title: str
    description: str
    type: str  # 'achievement', 'project', 'learning', 'career'

class TimelineEventCreate(BaseModel):
    year: str
    title: str
    description: str
    type: str

# Contact Messages Model
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    date: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str
