import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Image as ImageIcon, MoreHorizontal } from "lucide-react";

export default function Home() {
  // Mock data for recent posts
  const recentPosts = [
    { id: 1, platform: "Instagram", content: "Just launched my new project! 🚀", image: true, date: "2h ago" },
    { id: 2, platform: "Twitter", content: "Thinking about the future of AI...", image: false, date: "5h ago" },
    { id: 3, platform: "TikTok", content: "Day in the life of a dev 💻", image: true, date: "1d ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Posts</h2>
        <Link href="/create">
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-1" /> New Post
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${post.platform === 'Instagram' ? 'bg-pink-500/20 text-pink-400' :
                  post.platform === 'Twitter' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-black/40 text-white border border-gray-700'
                }`}>
                {post.platform}
              </span>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>

            <p className="text-sm text-gray-300 mb-3">{post.content}</p>

            {post.image && (
              <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                <ImageIcon className="text-gray-600" />
              </div>
            )}

            <div className="flex items-center justify-between text-gray-500">
              <div className="text-xs">
                Draft
              </div>
              <button>
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
