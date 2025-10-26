import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../mock/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Mesaj Gönderildi!",
      description: "En kısa sürede size geri dönüş yapacağım.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            İletişime Geçin
          </h1>
          <p className="text-xl text-slate-600">
            Herhangi bir soru veya işbirliği önerisi için benimle iletişime geçebilirsiniz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                  {personalInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Telefon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">+90 XXX XXX XX XX</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Konum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Türkiye</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-900">Mesaj Gönderin</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-base">Adınız</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-2 rounded-xl py-6"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2 rounded-xl py-6"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-base">Konu</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="mt-2 rounded-xl py-6"
                      placeholder="Proje hakkında"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">Mesaj</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="mt-2 rounded-xl"
                      rows={6}
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
                    <Send className="mr-2" />
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
