import NavBar from '../components/NavBar'
import styles from './page.module.css'
import globalCSS from '../globals.module.css'

export default function NewPage() {
    return (
        <div>
            <NavBar currentPage="NewPage" />
            <div className={globalCSS.content}>
                <p className={globalCSS.title}>Page Name</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris tellus, condimentum ut ex nec, porta molestie erat. Sed mattis eros et elit vestibulum rhoncus. Donec maximus consequat velit eu rhoncus. Nulla placerat neque at mauris ornare vehicula. Duis ornare ac mi nec hendrerit. In viverra tempus libero eget faucibus. Pellentesque eget ligula quis turpis pharetra ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas libero nisl, euismod non arcu sed, cursus fermentum erat. Cras dignissim egestas iaculis. Praesent bibendum ipsum ac tempor vehicula.

                    Nam ullamcorper sollicitudin lorem a pretium. Quisque cursus placerat erat, id varius velit convallis vitae. Cras accumsan dolor libero, sit amet pulvinar lacus condimentum ac. Sed quis consequat eros. Curabitur feugiat enim tincidunt aliquet venenatis. Suspendisse odio augue, congue vitae hendrerit vel, mattis tempor nisl. Nullam vitae ipsum dictum, commodo enim ut, aliquet enim. Integer luctus ultrices est. Quisque sit amet convallis nunc, sed tincidunt ante. Vestibulum laoreet, velit in congue faucibus, sapien arcu venenatis est, vel mollis elit quam et nunc. Donec iaculis tincidunt justo vitae tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sapien risus, efficitur non sapien in, auctor interdum odio.

                    Nullam maximus eu libero vel cursus. Quisque eget erat placerat, viverra nulla hendrerit, aliquet nisi. Ut vulputate vulputate urna, vitae mollis libero iaculis eu. In tincidunt, velit a lacinia varius, nunc tortor condimentum quam, iaculis tempus sapien leo vel nunc. Curabitur eget venenatis mauris. Integer scelerisque ligula sed nunc interdum aliquet. In venenatis magna sit amet risus posuere, congue suscipit leo molestie. Proin mollis metus id ante scelerisque volutpat vitae id lectus. Integer lobortis, tortor vitae laoreet fermentum, augue lectus lobortis augue, ac pulvinar lorem arcu ac quam.

                    Curabitur ultricies lacus nibh, in pellentesque sapien feugiat molestie. Cras dignissim, dui at pulvinar facilisis, justo augue tincidunt nibh, in pulvinar nisl sem in mi. Donec efficitur mauris sed vulputate fermentum. Donec aliquet luctus urna a auctor. Ut eros dui, iaculis quis lorem quis, eleifend vehicula enim. Proin congue volutpat leo, eget dictum ex placerat eget. Proin at enim finibus, faucibus lorem cursus, varius quam.

                    Ut quam libero, faucibus quis ligula ut, egestas rhoncus lectus. In eget urna odio. In suscipit ante in massa hendrerit, non bibendum tellus scelerisque. Cras lacinia tortor eu mauris efficitur rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac ex at purus rutrum facilisis ac at arcu. Vivamus a enim malesuada neque malesuada ultricies. Phasellus tempor quis erat at accumsan. Etiam sed massa nec sem feugiat malesuada. Sed sit amet dui dictum odio dapibus scelerisque. Sed laoreet sollicitudin odio, sit amet fermentum metus. Duis nec fringilla nisl. Nullam mauris nisi, fringilla ac nulla non, dignissim congue lorem. Praesent vitae felis ornare, semper velit id, finibus enim. Nulla sit amet erat vel justo tincidunt rutrum.
                </p>
            </div>
        </div>
    )
}