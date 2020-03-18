This is a forked esm, flatbundled version of https://github.com/schteppe/cannon.js for easier handling in module environments and tree shaking. Visit the original project for documentations and examples.

    yarn add cannon-es

```jsx
import { World } from 'cannon-es'

// ...
```

#### TO DO:

- Finish TS conversion
- Remove all use of `var`
- Convert to abstract classes where possible (Equation, Solver, etc.?)
- Resolve `as any` type assertions where possible
- Revisit math/Transform.ts types
- Revisit material/ContactMaterial.ts constructor assertions
- Consider narrowing types in objects/SPHSystem (Body -> Particle)
- Remove use of defined assertion (!) where possible
- Find and refactor regex: `options:.*Options = \{\}`
- Should `HingeConstraint` be passing `collideConnected` through `PointToPointConstraint` to `Constraint`? (used in `RigidVehicle` line 81)
- Correct & standardize JSDoc comments
- Test possible performance improvements by converting matrices to Maps (instead of Arrays)
- Only import types where possible (don't impot unused class as value):
  - Upgrade @babel/preset-typescript after March 20th for TypeScript 3.8 support
  - Update class imports marked with `// prettier-ignore` to `import type`
  - Remove Prettier ignore comments when TypeScript 3.8 is supported (Prettier 2.0 release+)
