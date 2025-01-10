import Container from "@/components/Container";
import PromptInput from "@/components/PromptInput";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  return (
    <main>
      <Container className="py-20">
        <div>
          <div className="space-y-4">
            <h1 className="font-inter bg-gradient-to-b from-foreground to-background/0 bg-clip-text text-6xl font-semibold leading-[150%] text-transparent">
              Whats on your mind today?
            </h1>
            <div className="">
              <PromptInput />
            </div>
            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-semibold text-muted-foreground">
                Try one of the sample prompts
              </h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="cursor-pointer rounded-md border bg-card p-4 shadow-md hover:bg-card/50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique, labore.
                </div>
                <div className="cursor-pointer rounded-md border bg-card p-4 shadow-md hover:bg-card/50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique, labore.
                </div>
                <div className="cursor-pointer rounded-md border bg-card p-4 shadow-md hover:bg-card/50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique, labore.
                </div>
                <div className="cursor-pointer rounded-md border bg-card p-4 shadow-md hover:bg-card/50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique, labore.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
