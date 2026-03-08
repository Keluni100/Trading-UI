 export default function ThanksPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
      <p className="text-muted-foreground mt-4">
        We are preparing your access to <strong>Deep Data Trading</strong>. 
        Check your email for login instructions.
      </p>
      <a href="/" className="mt-8 text-primary underline">Return Home</a>
    </div>
  );
}