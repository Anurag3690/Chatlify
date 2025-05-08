"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid h-dvh grid-cols-[240px_1fr] gap-4 p-4 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <div className="rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-y-auto">
          <ThreadList />
        </div>

        {/* Main Chat Thread */}
        <div className="flex flex-col rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
          <Thread />
        </div>
      </div>
    </AssistantRuntimeProvider>
  );
};
