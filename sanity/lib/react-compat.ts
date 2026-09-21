import * as React from 'react';

// Explicitly re-export React hooks & primitives for Webpack module replacement
export const {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useDebugValue,
  useDeferredValue,
  useTransition,
  startTransition,
  useId,
  useInsertionEffect,
  useSyncExternalStore,
  useActionState,
  useOptimistic,
  useFormStatus,
  use,
  Children,
  createContext,
  createElement,
  cloneElement,
  createRef,
  isValidElement,
  memo,
  forwardRef,
  lazy,
  Suspense,
  Fragment,
  StrictMode,
  Profiler,
  Component,
  PureComponent,
  version,
} = React as any;

// Polyfills for React 19 compatibility with sanity and @sanity packages
export const Activity = (React as any).Activity ?? React.Fragment;
export const useEffectEvent = (React as any).useEffectEvent ?? ((fn: any) => fn);

export default React;
