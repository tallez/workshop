import React from "react"

interface ArticleLayoutProps {
  children: React.ReactNode
}
export default function ArticleLayout(props: ArticleLayoutProps) {
  const { children } = props
  return (
    <main className="flex w-full items-center justify-center bg-blue-500">
      {children}
    </main>
  )
}
