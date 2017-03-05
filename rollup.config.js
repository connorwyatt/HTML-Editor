import typescriptPlugin from 'rollup-plugin-typescript';
import typescript from 'typescript';

export default {
  entry: 'src/index.ts',
  format: 'umd',
  moduleName: 'HTMLEditor',
  plugins: [
    typescriptPlugin({typescript: typescript})
  ],
  sourceMap: 'inline',
  dest: 'dist/html-editor.umd.js'
}
