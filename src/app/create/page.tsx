"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

export default function CreatePost() {
    const [content, setContent] = useState("");
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
    const [media, setMedia] = useState<File | null>(null);

    const platforms = ["Instagram", "Twitter", "TikTok", "Facebook", "LinkedIn"];

    const togglePlatform = (platform: string) => {
        setSelectedPlatforms((prev) =>
            prev.includes(platform)
                ? prev.filter((p) => p !== platform)
                : [...prev, platform]
        );
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0]);
        }
    };

    const removeMedia = () => {
        setMedia(null);
    };

    const handlePost = () => {
        if (!content && !media) return;
        if (selectedPlatforms.length === 0) {
            alert("Please select at least one platform.");
            return;
        }

        // Mock posting
        console.log("Posting to:", selectedPlatforms);
        console.log("Content:", content);
        console.log("Media:", media?.name);

        alert(`Posted to ${selectedPlatforms.join(", ")} successfully!`);

        // Reset form
        setContent("");
        setMedia(null);
        setSelectedPlatforms([]);
    };

    return (
        <div className="space-y-6 max-w-md mx-auto pt-4">
            <div>
                <h2 className="text-xl font-bold mb-4 px-1">Create New Post</h2>
            </div>

            <div className="space-y-5">
                {/* Platform Selection */}
                <div className="space-y-2">
                    <Label className="px-1">Select Platforms</Label>
                    <div className="flex flex-wrap gap-2">
                        {platforms.map((platform) => (
                            <button
                                key={platform}
                                onClick={() => togglePlatform(platform)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${selectedPlatforms.includes(platform)
                                        ? "bg-purple-600 border-purple-600 text-white"
                                        : "bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500"
                                    }`}
                            >
                                {platform}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Input */}
                <div className="space-y-2">
                    <Label htmlFor="content" className="px-1">Content</Label>
                    <Textarea
                        id="content"
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[150px] resize-none"
                    />
                </div>

                {/* Media Upload */}
                <div className="space-y-2">
                    <Label className="px-1">Media</Label>
                    {!media ? (
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 hover:border-gray-500 hover:bg-gray-900/50 transition-colors cursor-pointer relative bg-gray-900/20">
                            <input
                                type="file"
                                accept="image/*,video/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <Upload className="w-8 h-8 mb-2" />
                            <span className="text-xs">Tap to upload image or video</span>
                        </div>
                    ) : (
                        <div className="relative rounded-lg overflow-hidden border border-gray-700">
                            <div className="p-4 bg-gray-900 flex items-center justify-between">
                                <span className="text-sm truncate max-w-[200px] text-gray-300">{media.name}</span>
                                <button onClick={removeMedia} className="text-gray-400 hover:text-white">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                        size="lg"
                        onClick={handlePost}
                        disabled={!content && !media}
                    >
                        Post Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
