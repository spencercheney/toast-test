import { getLocation, getAnimationVariables, getCSSClasses } from "./StyleFunctions"
import { Toast } from "./Toast"
import { Style, ToastLocation, ToastValues } from "./Types"
import styles from "./toast.module.css"

/**
 * The container for the toast that will set it's location and styling
 * @param style see {@link iStyle}
 * @param status whether the toast is open or not
 * @param content what will be displayed in the toast popup
 * @param location see {@link ToastLocation}
 * @param openAnimationDuration how long it takes the toast to open
 * @param closeAnimationDuration how long it takes the toast to close
 * @param close used to close the toast
 */
export function Container(
  {
    style,
    toasts,
    location,
    openAnimationDuration,
    closeAnimationDuration,
    close,
  } : {
    /** see {@link Style} */
    style: Style,
    /** whether the toast is open or not */
    toasts: ToastValues[],
    /** see {@link ToastLocation} */
    location: ToastLocation,
    /** how long it takes the toast to open */
    openAnimationDuration: number,
    /** how long it takes the toast to close */
    closeAnimationDuration: number,
    /** used to close the toast */
    close: (toastId: string) => void
  }
) {

  const locationClass = getLocation(location)
  const animationVariables = getAnimationVariables(openAnimationDuration, closeAnimationDuration)

  return (
    <div className={ [styles.container, locationClass].join(' ') } style={{ ...animationVariables, ...style }}>
      {toasts.map(toast =>
        <Toast className={ getCSSClasses(toast.open, location) } content={ toast.content } close={ () => close(toast.id) } key={ toast.id }/>
      )}
    </div>
  )
}