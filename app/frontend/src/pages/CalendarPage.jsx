import React, { useState } from 'react';
import { Plus, Calendar as CalendarIcon, Clock, Edit, Trash2 } from 'lucide-react';
import { calendarEvents } from '../mock/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const CalendarPage = () => {
  const [events, setEvents] = useState(calendarEvents);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    type: 'task'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      // Edit existing event
      setEvents(events.map(event =>
        event.id === editingEvent.id ? { ...formData, id: event.id } : event
      ));
    } else {
      // Add new event
      const newEvent = {
        ...formData,
        id: events.length + 1
      };
      setEvents([...events, newEvent]);
    }
    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData(event);
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      type: 'task'
    });
    setEditingEvent(null);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-600';
      case 'work':
        return 'bg-green-600';
      case 'task':
        return 'bg-purple-600';
      default:
        return 'bg-slate-600';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'meeting':
        return 'Toplantı';
      case 'work':
        return 'İş';
      case 'task':
        return 'Görev';
      default:
        return 'Diğer';
    }
  };

  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Takvim & Planlama
            </h1>
            <p className="text-xl text-slate-600">
              Etkinliklerinizi ve planlarınızı yönetin
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                <Plus className="mr-2" />
                Yeni Etkinlik
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {editingEvent ? 'Etkinliği Düzenle' : 'Yeni Etkinlik Ekle'}
                </DialogTitle>
                <DialogDescription>
                  Etkinlik detaylarını girin
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div>
                  <Label htmlFor="title" className="text-base">Başlık</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-base">Açıklama</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="mt-2 rounded-xl"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-base">Tarih</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="mt-2 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-base">Saat</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      className="mt-2 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="type" className="text-base">Tip</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger className="mt-2 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meeting">Toplantı</SelectItem>
                      <SelectItem value="work">İş</SelectItem>
                      <SelectItem value="task">Görev</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
                  {editingEvent ? 'Güncelle' : 'Ekle'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 ${getTypeColor(event.type)} text-white text-xs rounded-full`}>
                        {getTypeLabel(event.type)}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-slate-900">{event.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit(event)}
                      className="rounded-xl hover:bg-blue-100"
                    >
                      <Edit className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(event.id)}
                      className="rounded-xl hover:bg-red-100"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-600">{event.description}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-500">Henüz etkinlik yok. Yeni bir etkinlik ekleyin!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
