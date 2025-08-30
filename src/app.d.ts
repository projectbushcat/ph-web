// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      fill?: 'ph-blue' | 'ph-yellow' | 'ph-green';
    }
    // interface PageState {}
    interface Platform {
      env: {};
    }
  }
}

export {};
