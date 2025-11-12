import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const vuePromptModule: TechnologyPromptModule = {
  id: 'tech-vue',
  name: 'Vue.js Analysis',
  description: 'Vue.js-specific analysis prompts',
  technology: TechnologyStack.VUE,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.CODE_QUALITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Vue.js-Specific Analysis

### Component Architecture (Vue 3 Composition API vs Options API)
- Analyze component organization and structure
- Review Composition API vs Options API usage
- Check for proper component composition and reusability
- Evaluate use of composables for logic extraction
- Assess single file component (SFC) structure

### Reactivity System
- Review ref, reactive, computed, and watch usage
- Analyze reactivity pitfalls and proper reactive data handling
- Check for proper use of toRefs and unref
- Evaluate performance implications of reactivity
- Assess shallow reactivity usage for optimization

### State Management
- Review state management approach (Vuex, Pinia, composables)
- Analyze store organization and module structure
- Check for proper state mutations and action patterns
- Evaluate use of getters and computed state
- Assess store composition and reusability

### Vue Router
- Analyze route configuration and nested routes
- Review navigation guards and route meta fields
- Check for proper dynamic routing and params handling
- Evaluate lazy loading of route components
- Assess programmatic navigation patterns

### Template Syntax and Directives
- Review template readability and complexity
- Analyze v-if vs v-show usage appropriately
- Check for proper v-for with :key binding
- Evaluate custom directive implementations
- Assess template refs and DOM access patterns

### Props and Events
- Review props definition and validation
- Analyze emit patterns and custom events
- Check for proper props drilling vs provide/inject
- Evaluate v-model usage and custom v-model
- Assess event naming conventions

### Lifecycle Hooks
- Analyze lifecycle hook usage (onMounted, onUpdated, etc.)
- Review cleanup in onUnmounted
- Check for proper async operations in lifecycle
- Evaluate watch and watchEffect usage
- Assess immediate and deep watch options

### Performance Optimization
- Review component lazy loading and code splitting
- Analyze v-once and v-memo usage
- Check for unnecessary re-renders
- Evaluate computed vs methods for derived state
- Assess virtual scrolling for large lists
- Review keep-alive usage for cached components

### TypeScript Integration (Vue 3)
- Review TypeScript usage with Composition API
- Analyze type definitions for props and emits
- Check for proper typing of refs and reactive
- Evaluate use of defineComponent and defineProps
- Assess generic component typing

### Composition API Patterns
- Analyze composable design and reusability
- Review setup() function organization
- Check for proper dependency injection (provide/inject)
- Evaluate reactive destructuring patterns
- Assess composable naming and conventions

### Vuex/Pinia Store Management
- Review store module organization
- Analyze actions, mutations, and getters
- Check for proper TypeScript integration
- Evaluate plugin usage and middleware
- Assess devtools integration

### Build Configuration (Vite/Vue CLI)
- Review build tool configuration
- Analyze plugin usage and optimization
- Check for proper environment configuration
- Evaluate bundle analysis and optimization
- Assess asset handling and public path

### Testing Strategies
- Review unit testing with Vue Test Utils
- Analyze component testing approaches
- Check for proper mocking of stores and composables
- Evaluate snapshot testing usage
- Assess E2E testing with Cypress/Playwright
- Review test coverage metrics

### Transitions and Animations
- Analyze transition component usage
- Review CSS transitions and animations
- Check for JavaScript hooks in transitions
- Evaluate transition groups for lists
- Assess animation performance

### Slots and Content Distribution
- Review named slots and scoped slots usage
- Analyze slot props patterns
- Check for proper fallback content
- Evaluate render functions and JSX
- Assess dynamic component rendering

### Directives and Plugins
- Review custom directive implementations
- Analyze directive hooks and lifecycle
- Check for proper plugin registration
- Evaluate global vs local directive scope
- Assess directive composition

### Server-Side Rendering (SSR) / Nuxt.js
- Review SSR configuration and setup
- Analyze data fetching patterns (asyncData, fetch)
- Check for proper hydration
- Evaluate meta tag management
- Assess static site generation usage

### Security Best Practices
- Review XSS prevention and v-html usage
- Analyze input sanitization
- Check for CSRF protection
- Evaluate authentication patterns
- Assess secure API communication

### Accessibility (A11y)
- Review semantic HTML usage
- Analyze ARIA attributes
- Check for keyboard navigation support
- Evaluate focus management
- Assess screen reader compatibility

### Code Quality and Standards
- Review adherence to Vue style guide
- Analyze linting configuration (ESLint + Vue plugin)
- Check for consistent naming conventions
- Evaluate component organization
- Assess documentation and comments

### Error Handling
- Review error boundary patterns
- Analyze global error handlers
- Check for proper async error handling
- Evaluate user feedback for errors
- Assess error logging and monitoring integration
`
};

