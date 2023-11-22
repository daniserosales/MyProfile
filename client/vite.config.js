// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Adjust the path if needed
      },
    },
    css: {
      modules: {
        // enable CSS modules globally
        globalModulePaths: [/\.global\.\w+$/],
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      css: true,
    },
  });
  