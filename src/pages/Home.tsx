import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/AppSidebar";
import { GitBranch, GitMerge, GitPullRequest, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-background/95">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Git Flow Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your Git workflow with our powerful repository management and synchronization tools
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/repositories')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-colors">
              <GitBranch className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Repository Management</h3>
              <p className="text-muted-foreground">
                Effortlessly manage multiple Git repositories with our intuitive interface
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-colors">
              <GitMerge className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Synchronization</h3>
              <p className="text-muted-foreground">
                Keep your repositories in sync with automated push and pull operations
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-colors">
              <GitPullRequest className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Git Tools</h3>
              <p className="text-muted-foreground">
                Access powerful Git operations and monitoring tools in one place
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 rounded-lg bg-purple-500/10 border border-purple-500/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Optimize Your Git Workflow?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Start managing your repositories more efficiently today
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => navigate('/repositories')}
              >
                View Repositories
              </Button>
              <Button 
                size="lg"
                onClick={() => navigate('/web-tools')}
              >
                Explore Tools
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;