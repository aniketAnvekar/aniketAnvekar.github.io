"use client"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-10 px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aniket Anvekar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
