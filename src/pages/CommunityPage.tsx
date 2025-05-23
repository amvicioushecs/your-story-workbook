import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, UserPlus, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '../contexts/AuthContext';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
const CommunityPage = () => {
  const {
    user
  } = useAuth();

  // Upcoming events (mock data)
  const upcomingEvents = [{
    id: 1,
    title: "Weekly Accountability Circle",
    date: "June 2, 2025",
    time: "7:00 PM EST",
    description: "Join our weekly virtual meetup where we share our progress, challenges, and support each other in our journey.",
    attendees: 18
  }, {
    id: 2,
    title: "Book Club Discussion: Chapter 4",
    date: "June 5, 2025",
    time: "6:30 PM EST",
    description: "Deep dive into Chapter 4: The Power of Daily Choices. Come prepared to share your insights!",
    attendees: 12
  }, {
    id: 3,
    title: "Guest Speaker: Overcoming Limiting Beliefs",
    date: "June 10, 2025",
    time: "8:00 PM EST",
    description: "Special session with Dr. Maria Reynolds on identifying and overcoming limiting beliefs that hold us back.",
    attendees: 31
  }];

  // Recent discussions (mock data)
  const recentDiscussions = [{
    id: 1,
    title: "How do you stay accountable to your daily choices?",
    author: "Sarah K.",
    replies: 24,
    lastActive: "2 hours ago"
  }, {
    id: 2,
    title: "My breakthrough moment with Chapter 7",
    author: "Michael T.",
    replies: 16,
    lastActive: "Yesterday"
  }, {
    id: 3,
    title: "Strategies for reframing negative thought patterns",
    author: "Elena J.",
    replies: 31,
    lastActive: "3 days ago"
  }];

  // Community members (mock data)
  const communityMembers = [{
    id: 1,
    name: "Sarah K.",
    role: "Member",
    joined: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=120&h=120"
  }, {
    id: 2,
    name: "Michael T.",
    role: "Member",
    joined: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=120&h=120"
  }, {
    id: 3,
    name: "Elena J.",
    role: "Member",
    joined: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=120&h=120"
  }, {
    id: 4,
    name: "David L.",
    role: "Moderator",
    joined: "4 months ago",
    avatar: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=120&h=120"
  }, {
    id: 5,
    name: "Rebecca S.",
    role: "Member",
    joined: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=120&h=120"
  }];
  return <div className="min-h-screen">
      {/* Hero section */}
      <div className="wood-texture text-center py-16 px-4 mb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-crafted-gold mb-4 animate-fade-in">
            Our Community
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-crafted-cream mb-8 animate-fade-in animation-delay-150">
            Connect, Share, and Grow Together
          </h2>
          <p className="text-xl text-crafted-cream opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-300">
            Join a supportive network of individuals on their journey to craft better lives through intentional choices.
          </p>
          {!user && <div className="animate-fade-in animation-delay-450">
              <Link to="/auth">
                <Button className="bg-crafted-gold hover:bg-crafted-gold/90 text-crafted-brown text-lg px-6 py-6">
                  Sign Up to Join <UserPlus className="ml-2" />
                </Button>
              </Link>
            </div>}
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 py-8 max-w-6xl mx-auto">
        {/* Author section */}
        <section className="mb-16 bg-white/70 p-8 rounded-lg border border-crafted-gold/30 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <Avatar className="h-88 w-48 rounded-lg border-4 border-crafted-gold">
                <AvatarImage src="/lovable-uploads/431471b9-3570-4339-9808-57787f74d22d.png" alt="Hector Verdugo" className="object-fill" />
                <AvatarFallback className="bg-crafted-gold text-crafted-brown text-4xl font-bold">
                  HV
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="md:w-3/4 text-center md:text-left">
              <Badge className="mb-2 bg-crafted-gold text-crafted-brown px-3 py-1 text-sm">Author</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-4">
                Hector Verdugo
              </h2>
              <p className="text-xl font-serif italic text-crafted-lightBrown mb-4">
                "Crafted By Choice" - A guide to intentional living and personal transformation
              </p>
              <p className="text-lg text-crafted-lightBrown mb-6">
                Hector Verdugo brings his wealth of experience in personal development and transformation to the Crafted By Choice community. Through his book and this interactive platform, he guides members on their journey to create meaningful change through daily intentional choices.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button className="bg-crafted-brown hover:bg-crafted-brown/90 text-crafted-cream">
                  <BookOpen className="mr-2 h-5 w-5" /> About the Book
                </Button>
                <Button variant="outline" className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20">
                  Join Author Q&A
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-crafted-gold/30 bg-white/70">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-serif text-crafted-brown">1,200+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-crafted-lightBrown">Community Members</p>
              </CardContent>
            </Card>
            <Card className="border-crafted-gold/30 bg-white/70">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-serif text-crafted-brown">50+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-crafted-lightBrown">Weekly Events</p>
              </CardContent>
            </Card>
            <Card className="border-crafted-gold/30 bg-white/70">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-serif text-crafted-brown">85%</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-crafted-lightBrown">Report Positive Change</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community benefits */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-8 text-center">
            Why Join Our Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 p-6 rounded-lg border border-crafted-gold/30 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-crafted-brown mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2 text-crafted-gold" />
                Accountability Partners
              </h3>
              <p className="text-lg text-crafted-lightBrown mb-4">
                Connect with accountability partners who understand your journey and will help you stay committed to your goals and choices.
              </p>
              <div className="mt-4">
                <Badge className="bg-crafted-gold text-crafted-brown">Weekly Check-ins</Badge>
                <Badge className="ml-2 bg-crafted-gold text-crafted-brown">Goal Tracking</Badge>
                <Badge className="ml-2 bg-crafted-gold text-crafted-brown">Partner Matching</Badge>
              </div>
            </div>
            <div className="bg-white/70 p-6 rounded-lg border border-crafted-gold/30 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-crafted-brown mb-4 flex items-center">
                <MessageCircle className="h-6 w-6 mr-2 text-crafted-gold" />
                Guided Discussion Forums
              </h3>
              <p className="text-lg text-crafted-lightBrown mb-4">
                Engage in thoughtful discussions about each chapter, share insights, ask questions, and learn from others' experiences.
              </p>
              <div className="mt-4">
                <Badge className="bg-crafted-gold text-crafted-brown">Chapter Discussions</Badge>
                <Badge className="ml-2 bg-crafted-gold text-crafted-brown">Expert Moderators</Badge>
                <Badge className="ml-2 bg-crafted-gold text-crafted-brown">Resource Sharing</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming events */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-8 text-center">
            Upcoming Community Events
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map(event => <Card key={event.id} className="border-crafted-gold/30 hover:border-crafted-gold transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-serif text-crafted-brown">{event.title}</CardTitle>
                    <Badge className="bg-crafted-gold text-crafted-brown">{event.attendees} Attending</Badge>
                  </div>
                  <p className="text-crafted-lightBrown font-medium">{event.date} • {event.time}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-crafted-lightBrown mb-4">{event.description}</p>
                  <Button className="bg-crafted-brown hover:bg-crafted-brown/90 text-crafted-cream">
                    Join Event
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20">
              View All Events <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Community discussions */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-8 text-center">
            Recent Discussions
          </h2>
          <div className="space-y-4">
            {recentDiscussions.map(discussion => <div key={discussion.id} className="bg-white/70 p-4 rounded-lg border border-crafted-gold/30 hover:border-crafted-gold transition-all hover:shadow-md">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl font-semibold text-crafted-brown mb-2">{discussion.title}</h3>
                  <Badge className="bg-crafted-gold/20 text-crafted-brown border-crafted-gold">
                    <MessageCircle className="h-3 w-3 mr-1" /> {discussion.replies}
                  </Badge>
                </div>
                <p className="text-crafted-lightBrown text-sm">
                  Started by {discussion.author} • Last active {discussion.lastActive}
                </p>
              </div>)}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20">
              View All Discussions <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Community members */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-8 text-center">
            Meet Our Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {communityMembers.map(member => <Popover key={member.id}>
                <PopoverTrigger asChild>
                  <div className="bg-white/70 p-4 rounded-lg border border-crafted-gold/30 hover:border-crafted-gold transition-all hover:shadow-md text-center cursor-pointer">
                    <Avatar className="h-20 w-20 mx-auto mb-3">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-crafted-gold text-crafted-brown text-xl font-bold">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-serif text-lg font-semibold text-crafted-brown">{member.name}</h3>
                    <Badge className={`${member.role === 'Moderator' ? 'bg-crafted-gold' : 'bg-crafted-gold/30'} text-crafted-brown mt-2`}>
                      {member.role}
                    </Badge>
                    <p className="text-crafted-lightBrown text-sm mt-2">Joined {member.joined}</p>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-60">
                  <div className="text-center mb-4">
                    <Avatar className="h-16 w-16 mx-auto mb-2">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-crafted-gold text-crafted-brown text-xl font-bold">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-serif text-lg font-semibold text-crafted-brown">{member.name}</h4>
                    <p className="text-crafted-lightBrown text-sm">Joined {member.joined}</p>
                  </div>
                  <Button variant="outline" className="w-full border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20">
                    View Profile
                  </Button>
                </PopoverContent>
              </Popover>)}
          </div>
          <div className="text-center">
            <p className="text-lg text-crafted-lightBrown mb-6">
              And many more amazing individuals committed to their personal growth journey!
            </p>
            <Button variant="outline" className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20">
              View All Members <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Join form */}
        <section className="mb-16 paper-texture p-8 rounded-lg border border-crafted-gold/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-crafted-brown mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-crafted-lightBrown mb-6">
              Sign up now to connect with like-minded individuals on the journey of intentional living.
            </p>
            {user ? <div className="bg-white bg-opacity-70 p-6 rounded-lg border border-crafted-gold/30 mb-6">
                <p className="text-crafted-brown text-lg mb-4">
                  You're signed in as <span className="font-semibold">{user.email}</span>
                </p>
                <Button className="bg-crafted-gold hover:bg-crafted-gold/90 text-crafted-brown text-lg px-6 py-6 w-full sm:w-auto">
                  Complete Your Community Profile
                </Button>
              </div> : <div className="bg-white bg-opacity-70 p-6 rounded-lg border border-crafted-gold/30 mb-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Input type="email" placeholder="Your email address" className="border-crafted-lightBrown" />
                  <Button className="bg-crafted-gold hover:bg-crafted-gold/90 text-crafted-brown">
                    Join Community
                  </Button>
                </div>
                <p className="text-crafted-lightBrown text-sm">
                  Or <Link to="/auth" className="text-crafted-brown underline">sign in</Link> to your existing account
                </p>
              </div>}
          </div>
        </section>

        {/* CTA section */}
        <section className="paper-texture p-8 rounded-lg border border-crafted-gold/30 text-center">
          <h3 className="text-2xl font-serif font-semibold text-crafted-brown mb-4">
            Not ready to join yet?
          </h3>
          <p className="text-lg text-crafted-lightBrown mb-6">
            Start with the interactive workbook to begin your personal journey.
          </p>
          <Link to="/workbook">
            <Button className="bg-crafted-brown hover:bg-crafted-brown/90 text-crafted-gold">
              Explore the Workbook
            </Button>
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-crafted-brown text-crafted-cream py-8 mt-12">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-serif font-semibold text-crafted-gold">Crafted By Choice</h3>
              <p className="text-crafted-cream/70">Interactive Community</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="text-crafted-cream hover:text-crafted-gold transition-colors">
                Home
              </Link>
              <Link to="/workbook" className="text-crafted-cream hover:text-crafted-gold transition-colors">
                Workbook
              </Link>
              <Link to="/auth" className="text-crafted-cream hover:text-crafted-gold transition-colors">
                Account
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-crafted-cream/50 text-sm">
            <p>© {new Date().getFullYear()} Crafted By Choice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default CommunityPage;
