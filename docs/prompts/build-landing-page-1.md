You are a senior product designer, senior frontend engineer, UX writer, and production-quality Next.js engineer.

I am building a premium mobile-first landing page for a personal coaching brand.

Read these files first:
@docs/brief/shew.txt
@docs/prompts/build-landing-page-1.md


Your task is to build the first production-quality version of this landing page in the current repository.

Important product context:
This is NOT a sales page.
This is NOT a typical coaching website.
This is NOT an information page.
This page must feel like the first minutes of a real coaching session.

The visitor should feel:
- “I feel safe here.”
- “I can slow down.”
- “I can think.”
- “I am not being judged.”

The page must feel like entering a calm room where nobody is trying to convince the visitor of anything.

Main principle:
Design for trust, not for conversion.

Core brand sentence:
The following sentence MUST appear exactly as written, without any change:

Я не дам вам готовых ответов. Но могу создать пространство, в котором вы услышите собственные.

Do not paraphrase it.
Do not split it incorrectly.
Do not change punctuation.
Do not translate it.

Reference website:
The brief mentions this website:
https://checkup.pavelbilskiy.com/ru/

Use it ONLY as a UX quality benchmark:
- premium feeling
- emotional flow
- trust
- calm digital product feeling
- minimalism
- quality of spacing and rhythm

Do NOT copy:
- layout
- copywriting
- composition
- illustrations
- colors
- animations
- visual identity
- section structure

The final result must be unique.

Technology requirements:
- Next.js
- TypeScript
- App Router
- Tailwind CSS
- Static-first landing page
- Minimal client-side JavaScript
- Mobile-first
- Production-quality code
- Semantic HTML
- Accessible buttons and links
- Reduced motion support
- SEO metadata
- README with clear run/deploy instructions

Repository handling:
1. Inspect the current repository first.
2. If this is not yet a real Next.js project, initialize/build the required Next.js structure inside the existing repository without destroying existing files.
3. Keep @docs/brief/shew.txt as the source brief.
4. Remove accidental macOS/system files from git tracking if present, for example .DS_Store.
5. Make sure .gitignore properly excludes .DS_Store, node_modules, .next, env files, build artifacts, logs, and local IDE/system noise.
6. Keep the implementation clean and easy to continue later.

Before writing code, do this:
1. Summarize the product intent in your own words.
2. Propose the component structure.
3. Propose the design system:
    - color palette
    - typography scale
    - spacing rhythm
    - button style
    - section rhythm
    - motion principles
4. Explain how you will implement the reflection journey without making it feel like a quiz.
5. Then implement.

Required emotional order:
Use all blocks from @docs/brief/shew.txt in the exact emotional order:

1. Hero
2. Transition block
3. Video section
4. Reflection journey
5. Completion
6. About me
7. How coaching works
8. Telegram
9. Invitation
10. FAQ
11. Footer

Hard UX rules:
- The page must never feel like marketing.
- No aggressive CTA language.
- Buttons must feel like calm invitations.
- No “buy now” feeling.
- No sales pressure.
- No coaching clichés.
- No lotus.
- No chakras.
- No butterflies.
- No glowing people.
- No stock psychology images.
- No fake psychology visuals.
- No motivational slogans.
- No “best version of yourself” energy.
- No over-designed decorative noise.
- Silence and empty space must be part of the design.

Hero requirements:
Use the exact headline from the brief:

Иногда мы слишком долго ищем ответы, хотя сначала стоило задать себе несколько других вопросов.

Use the exact subheadline from the brief:

Я не дам вам готовых ответов. Но могу создать пространство, в котором вы услышите собственные.

Use the hero text from the brief.

Primary button:
Давайте начнем

No secondary CTA in hero.

Hero button behavior:
- Smoothly scroll to the next section.
- No page reload.
- No popup.
- No modal.
- No form.

Reflection journey requirements:
This is the most important UX part.

Do NOT make it look like:
- a quiz
- a form
- a survey
- a funnel
- a productivity app
- a test

Strict rules:
- No progress bars.
- No scores.
- No inputs.
- No forms.
- No saved answers.
- No gamification.
- No stepper UI that feels mechanical.
- One screen = one question.
- Large typography.
- Lots of white space.
- Calm pacing.
- Each question must feel like a quiet pause.

Preferred implementation:
Use separate semantic sections for each question.
Each question section should have min-height close to one viewport.
Use anchor links and CSS smooth scrolling for “Следующий вопрос”.
Avoid React state unless absolutely necessary.
This should feel like walking through a sequence of quiet rooms, not answering a questionnaire.

Use all seven reflection questions from the brief exactly in order.

Video section:
- Large embedded YouTube video placeholder.
- No autoplay.
- Make it responsive.
- Make the placeholder easy to replace with a real YouTube ID later.
- Add calm explanatory text below the video exactly based on the brief.
- Button: Продолжить
- Smooth scroll to the reflection journey.

About section:
- Use a small portrait placeholder.
- Do not use fake stock photo.
- Make it easy to replace with a real portrait later.
- Text from the brief.
- Keep it minimal and warm.

How coaching works:
Use three cards:
1. Останавливаемся.
2. Исследуем.
3. Двигаемся.

Cards should be calm, minimal, elegant, and not look like SaaS pricing cards.

Telegram block:
Use the text from the brief.
Button:
Перейти в Telegram

Invitation block:
Use the text from the brief.
Button:
Записаться на ознакомительную встречу

FAQ:
Include these questions:
- What is coaching?
- Will you give advice?
- What if I don’t know my request?
- How long does a session last?
- Who is coaching not suitable for?

Write FAQ answers in Russian.
Tone:
- calm
- clear
- honest
- non-salesy
- no promises of magical results
- no manipulative copywriting

Footer:
Minimal footer with placeholders for:
- Instagram
- Telegram
- Email
- Privacy Policy
- Impressum

Use placeholder href values that are easy to replace later.
Do not leave broken visual states.

Design direction:
Create a premium digital product feeling inspired by the quality level of Apple, Notion, Linear, Stripe, Raycast, and Arc Browser.

Visual style:
- minimal
- elegant
- modern
- intelligent
- warm
- quiet
- spacious
- premium
- emotionally safe

Mobile-first:
Most visitors will come from Instagram.
Optimize the first impression for mobile screens.

Mobile requirements:
- Hero must feel excellent on mobile.
- Large readable typography.
- No tiny text.
- No cramped blocks.
- No desktop-first layout.
- Buttons must be easy to tap.
- Use modern viewport units where appropriate, for example svh.
- Avoid layout shifts.
- Keep the page fast.

Desktop:
Desktop is secondary but must still look elegant.
Do not simply stretch mobile content full width.
Use readable max-widths and calm composition.

Accessibility:
- Use semantic HTML.
- Use proper heading hierarchy.
- Use accessible buttons/links.
- Use visible focus states.
- Respect prefers-reduced-motion.
- Ensure color contrast is good.
- Do not rely on color alone.
- Make anchor navigation keyboard-friendly.

Performance:
- Static-first.
- Avoid unnecessary client components.
- Avoid large dependencies.
- Avoid animation libraries unless absolutely necessary.
- Prefer CSS for smooth scrolling and subtle transitions.
- Keep JavaScript minimal.
- Optimize fonts.
- Avoid heavy images.
- Use a local placeholder for portrait if needed.

Content architecture:
Separate content from layout where reasonable.
Create a content file, for example:
src/content/landing.ts

Create reusable components where it improves clarity:
- Section
- CalmButton
- HeroSection
- TransitionSection
- VideoSection
- ReflectionSection
- CompletionSection
- AboutSection
- CoachingProcessSection
- TelegramSection
- InvitationSection
- FAQSection
- Footer

Do not over-engineer.
Do not create unnecessary abstractions.
Keep the code readable and maintainable.

Suggested file structure:
- src/app/layout.tsx
- src/app/page.tsx
- src/app/globals.css
- src/content/landing.ts
- src/components/CalmButton.tsx
- src/components/Section.tsx
- src/components/HeroSection.tsx
- src/components/TransitionSection.tsx
- src/components/VideoSection.tsx
- src/components/ReflectionJourney.tsx
- src/components/CompletionSection.tsx
- src/components/AboutSection.tsx
- src/components/CoachingProcessSection.tsx
- src/components/TelegramSection.tsx
- src/components/InvitationSection.tsx
- src/components/FAQSection.tsx
- src/components/Footer.tsx

You may adjust the structure if the repository already has a better convention, but explain why.

Implementation details:
- Use Tailwind CSS carefully.
- Do not fill JSX with chaotic class names if extracting small reusable style patterns makes the code clearer.
- Use CSS variables for core colors if useful.
- Use a quiet background, not pure corporate white if a warmer tone works better.
- Use subtle borders and soft contrast.
- Use restrained motion.
- Use generous spacing.
- Use high-quality typography.
- Use max-widths intentionally.

SEO:
Add metadata:
- title
- description
- Open Graph basics if appropriate
- Russian language metadata if applicable

README:
Update README.md with:
- project description
- tech stack
- how to install
- how to run locally
- how to build
- how to deploy, for example Vercel
- where to edit content
- where to replace Telegram, Instagram, Email, Privacy Policy, Impressum links
- where to replace YouTube video ID
- where to replace portrait

Quality bar:
Do not stop at a generic landing page.
This must look like a carefully designed premium product.
The first screen must already feel calm and expensive.
The reflection journey must be the emotional center of the page.
The page must not look like a template.

After implementation:
1. Run lint/build/typecheck if scripts exist.
2. If scripts do not exist, add reasonable scripts and run them.
3. Fix all errors.
4. Check mobile layout mentally and technically.
5. Check that all required blocks exist.
6. Check that the exact required sentence appears exactly.
7. Check that smooth scrolling works.
8. Check that reduced motion is respected.
9. Check that there are no forms, progress bars, scores, or quiz-like UI.
10. Check that no forbidden coaching clichés are used.

Final response:
After you finish, provide:
1. Short product/design summary.
2. List of created/changed files.
3. How to run the project.
4. How to edit content.
5. What placeholders must be replaced.
6. Any known limitations or recommended next steps.

Start now by inspecting the repository and reading the two brief files.